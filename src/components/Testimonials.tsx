import React from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F3F6FA] dark:bg-[#07192E] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <span>Depoimentos Reais</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
            A confiança dos nossos clientes é nossa maior conquista.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Veja o depoimento publicado por clientes atendidos pela nossa equipe.
          </p>
        </div>

        {/* Testimonials List */}
        <div className="max-w-3xl mx-auto">
          {COMPANY_CONFIG.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#030F1E] border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#073B78]/10 dark:text-white/10" />

              {/* Star rating */}
              <div className="flex items-center gap-1 text-[#F58220] mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-[#062B55] dark:text-slate-100 leading-relaxed font-medium mb-6 italic">
                "{item.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                <div>
                  <p className="text-sm font-bold text-[#062B55] dark:text-white font-display">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#F58220] font-semibold">
                    {item.highlight}
                  </p>
                </div>

                <div className="p-2.5 rounded-full bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-white">
                  <MessageSquareQuote className="w-5 h-5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
