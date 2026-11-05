import React from 'react';
import { Calendar, Award, Building, Compass } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const Timeline: React.FC = () => {
  const timelineIcons = [Calendar, Building, Award, Compass];

  return (
    <section id="historia" className="py-20 bg-[#F3F6FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 text-[#073B78] text-xs font-bold uppercase tracking-wider">
            <span>Nossa Trajetória</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] font-display text-balance">
            Uma história construída com experiência, dedicação e propósito.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conheça os marcos fundamentais que moldaram nossa atuação no mercado de correspondente bancário e serviços financeiros.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Central Line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#073B78]/20 -translate-x-1/2 rounded-full" />

          <div className="space-y-12 relative">
            {COMPANY_CONFIG.timeline.map((item, idx) => {
              const Icon = timelineIcons[idx % timelineIcons.length];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-[#073B78]">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#F58220]/10 text-[#F58220] text-xs font-extrabold">
                          {item.year}
                        </span>
                        <div className="p-2 rounded-lg bg-[#073B78]/10 text-[#073B78]">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#062B55] mb-2 font-display">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Circle Badge in Center */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#073B78] text-[#F58220] border-4 border-white shadow-md shrink-0 z-10">
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>

                  {/* Empty Spacer Column for Desktop Symmetry */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
