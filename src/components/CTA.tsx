import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#062B55] text-white relative overflow-hidden">
      
      {/* Geometric Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#073B78] rounded-full blur-3xl opacity-30 pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F58220] rounded-full blur-3xl opacity-10 pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F58220] text-xs font-bold uppercase tracking-wider border border-white/10">
          <ShieldCheck className="w-4 h-4" />
          <span>Atendimento Imediato</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display text-balance leading-tight">
          Seus planos merecem sair do papel.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
          Conte com a Fourcred para encontrar soluções que aproximam você das suas conquistas.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={COMPANY_CONFIG.getWhatsAppLink('Olá! Gostaria de falar agora com a equipe da Fourcred.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#F58220] hover:bg-[#FFA34D] text-white font-extrabold text-base transition-all shadow-xl shadow-[#F58220]/20 hover:scale-102 active:scale-98"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Fale agora com nossa equipe</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
