import React, { useState } from 'react';
import { House, ShieldCheck, Wallet, HeartHandshake, ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { ServiceModal } from './ServiceModal';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof COMPANY_CONFIG.services[0] | null>(null);

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

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 text-[#073B78] text-xs font-bold uppercase tracking-wider">
            <span>Soluções Financeiras</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] font-display text-balance">
            Soluções inteligentes para realizar seus objetivos.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Conheça nossas soluções e descubra como podemos ajudar você a conquistar seus planos com mais tranquilidade e segurança.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_CONFIG.services.map((service) => {
            const Icon = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#F3F6FA] border border-slate-200/80 hover:border-[#073B78] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Top Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#073B78] text-white flex items-center justify-center mb-6 shadow-md group-hover:bg-[#F58220] transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Subtitle kicker */}
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F58220] mb-1">
                    {service.shortTitle}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#062B55] mb-3 font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-200/60 flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 group-hover:border-[#073B78] text-[#073B78] font-bold text-xs transition-colors hover:bg-[#073B78] hover:text-white"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={COMPANY_CONFIG.getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-bold text-slate-600 hover:text-[#F58220] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Atendimento direto</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
