import React from 'react';
import { Briefcase, Users, Zap, ShieldAlert, Layers, HeartHandshake } from 'lucide-react';

export const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: Briefcase,
      title: 'Experiência e Conhecimento',
      description: 'Liderança com 20 anos de atuação sólida no mercado financeiro e imobiliário.',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Análise individualizada para encontrar a melhor opção de crédito ou seguro para o seu perfil.',
    },
    {
      icon: Zap,
      title: 'Agilidade nos Processos',
      description: 'Fluxos otimizados para aprovação e análise documental rápida sem burocracias desnecessárias.',
    },
    {
      icon: ShieldAlert,
      title: 'Transparência e Compromisso',
      description: 'Informações claras e sem letras miúdas, priorizando a segurança em cada decisão.',
    },
    {
      icon: Layers,
      title: 'Soluções Diversificadas',
      description: 'Portfólio completo abrangendo crédito habitacional, seguros, consórcios e benefícios.',
    },
    {
      icon: HeartHandshake,
      title: 'Relacionamento Próximo',
      description: 'Acompanhamento lado a lado do cliente durante todas as etapas até a conquista final.',
    },
  ];

  return (
    <section className="py-20 bg-[#062B55] text-white relative overflow-hidden">
      
      {/* Background Decorative Gradient Radial */}
      <div className="absolute inset-0 gradient-blue-radial pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 text-[#F58220] text-xs font-bold uppercase tracking-wider border border-white/10">
            <span>Nossos Pilares</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display text-balance">
            Por que escolher a Fourcred?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
            Entenda por que nos tornamos referência em correspondência bancária e soluções de proteção no mercado.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F58220] transition-all duration-300 hover:bg-white/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#073B78] text-[#F58220] flex items-center justify-center mb-5 border border-[#F58220]/20 group-hover:bg-[#F58220] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F58220]">0{idx + 1}.</span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
