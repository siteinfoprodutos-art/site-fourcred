import React from 'react';
import { Building2, Landmark, UserCheck, Shield } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    {
      icon: Landmark,
      title: 'Correspondente Caixa',
      description: 'Credenciamento oficial Caixa Econômica Federal',
    },
    {
      icon: Building2,
      title: '20 Anos de Experiência',
      description: 'Liderança sólida no mercado financeiro',
    },
    {
      icon: UserCheck,
      title: 'Atendimento Personalizado',
      description: 'Orientação dedicada em todas as etapas',
    },
    {
      icon: Shield,
      title: 'Classificação Diamante',
      description: 'Reconhecimento histórico em qualidade operacional',
    },
  ];

  return (
    <section className="bg-[#062B55] text-white py-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="p-3 rounded-lg bg-[#073B78] text-[#F58220] shrink-0 border border-[#F58220]/30">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
