import React, { useState } from 'react';
import { House, ShieldCheck, Wallet, HeartHandshake, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { ServiceModal } from './ServiceModal';
import { useTiltCard } from '../utils/motion';

// Componente de Card Individual com 3D Tilt suave (máx 6 deg) e brilho no cursor
const ServiceTiltCard: React.FC<{
  service: typeof COMPANY_CONFIG.services[0];
  onOpenModal: (srv: typeof COMPANY_CONFIG.services[0]) => void;
}> = ({ service, onOpenModal }) => {
  const { cardRef, glarePos } = useTiltCard(6);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'House':
        return House;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Wallet':
        return Wallet;
      case 'HeartHandshake':
        return HeartHandshake;
      default:
        return House;
    }
  };

  const Icon = getIcon(service.iconName);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#F3F6FA] dark:bg-[#07192E] border border-slate-200/80 dark:border-slate-800 hover:border-[#F58220]/60 dark:hover:border-[#F58220] transition-colors duration-200 shadow-sm overflow-hidden will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Brilho suave que acompanha o cursor (opacity e radial-gradient) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 200px at ${glarePos.x}% ${glarePos.y}%, rgba(245, 130, 32, ${glarePos.opacity}), transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        {/* Top Icon */}
        <div className="w-14 h-14 rounded-xl bg-[#073B78] text-white flex items-center justify-center mb-5 shadow-md group-hover:bg-[#F58220] transition-colors duration-200">
          <Icon className="w-7 h-7" />
        </div>

        {/* Subtitle kicker */}
        <p className="text-xs font-bold uppercase tracking-wider text-[#F58220] mb-1">
          {service.shortTitle}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#062B55] dark:text-white mb-2 font-display">
          {service.title}
        </h3>

        {/* Benefício em uma linha em destaque */}
        <div className="p-2.5 rounded-lg bg-white/70 dark:bg-black/30 border border-slate-200/60 dark:border-slate-700/60 mb-4 text-xs font-semibold text-[#073B78] dark:text-[#FFA34D] flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F58220] shrink-0 mt-0.5" />
          <span>{service.benefit}</span>
        </div>

        {/* Descrição */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
          {service.description}
        </p>
      </div>

      {/* Card Actions: Botão Quero saber mais direcionando para o WhatsApp com mensagem do serviço */}
      <div className="relative z-10 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-col gap-2.5">
        <a
          href={COMPANY_CONFIG.getWhatsAppLink(service.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F58220] hover:bg-[#FFA34D] text-white font-extrabold text-xs transition-all shadow-md active:scale-98"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Quero saber mais</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        <button
          type="button"
          onClick={() => onOpenModal(service)}
          className="w-full min-h-[38px] inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#073B78] dark:text-slate-200 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          <span>Ver detalhes e requisitos</span>
        </button>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof COMPANY_CONFIG.services[0] | null>(null);

  return (
    <section id="servicos" className="py-20 bg-white dark:bg-[#030F1E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <span>Soluções Inteligentes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
            Soluções inteligentes para realizar seus objetivos.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Conheça nossas soluções e descubra como podemos ajudar você a conquistar seus planos com mais tranquilidade e segurança.
          </p>
        </div>

        {/* 4 Cards com 3D Tilt e Botão Quero saber mais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {COMPANY_CONFIG.services.map((service) => (
            <ServiceTiltCard
              key={service.id}
              service={service}
              onOpenModal={setSelectedService}
            />
          ))}
        </div>

      </div>

      {/* Modal Interativo com Detalhes */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
