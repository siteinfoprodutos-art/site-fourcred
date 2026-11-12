import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-[#F3F6FA] dark:bg-[#07192E] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
            Perguntas Frequentes
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Respostas claras para as principais questões sobre financiamento Caixa, FGTS, documentação e seguros.
          </p>
        </div>

        {/* Acordeão com 6 perguntas */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {COMPANY_CONFIG.faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#030F1E] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full min-h-[56px] p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-[#062B55] dark:text-white hover:text-[#F58220] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{item.q}</span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#F58220]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA para dúvidas no WhatsApp */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            Sua dúvida não está listada acima?
          </p>
          <a
            href={COMPANY_CONFIG.getWhatsAppLink('Olá! Gostaria de tirar uma dúvida específica sobre financiamento habitacional.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F58220] hover:bg-[#FFA34D] text-white font-extrabold text-xs shadow-md transition-all active:scale-98"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com especialista agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
