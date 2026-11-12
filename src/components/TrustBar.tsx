import React, { useEffect, useState, useRef } from 'react';
import { Home, Building2, TrendingUp, Award, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

interface TrustBarProps {
  isVisible?: boolean;
}

export const TrustBar: React.FC<TrustBarProps> = ({ isVisible = false }) => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({ 0: 0, 1: 0 });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // Respeita prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts({
        0: COMPANY_CONFIG.trustCounters[0].value,
        1: COMPANY_CONFIG.trustCounters[1].value,
      });
      return;
    }

    const duration = 1600; // ms
    const startTime = performance.now();

    const target0 = COMPANY_CONFIG.trustCounters[0].value; // 900
    const target1 = COMPANY_CONFIG.trustCounters[1].value; // 20

    const updateCounts = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Easing cúbico suave: cubic-bezier(0.22, 1, 0.36, 1)
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        0: Math.round(target0 * ease),
        1: Math.round(target1 * ease),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  }, [isVisible]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return Home;
      case 'Building2':
        return Building2;
      case 'TrendingUp':
        return TrendingUp;
      case 'Award':
        return Award;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section className="bg-[#062B55] dark:bg-[#030F1E] text-white py-10 border-b border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Selo Diamante em Evidência no Topo da Faixa */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F58220] text-white shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white tracking-wide uppercase">
                {COMPANY_CONFIG.credibility.rating}
              </p>
              <p className="text-xs text-slate-300 font-medium">
                {COMPANY_CONFIG.credibility.caixaBadge}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-amber-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#F58220]" />
            <span>Processos certificados e suporte humanizado</span>
          </div>
        </div>

        {/* 3 Indicadores de Confiança com Contadores Animados */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {COMPANY_CONFIG.trustCounters.map((item, idx) => {
            const Icon = getIcon(item.icon);
            const isNumeric = !item.isPlaceholder;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#073B78] text-[#F58220] border border-[#F58220]/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-display flex items-baseline gap-1">
                    {isNumeric ? (
                      <>
                        <span>{counts[idx] ?? 0}</span>
                        <span className="text-[#F58220]">{item.suffix}</span>
                      </>
                    ) : (
                      <span className={item.displayPlaceholder === 'DIAMANTE' ? 'text-amber-300 text-2xl' : 'text-slate-300 text-lg'}>
                        {item.displayPlaceholder}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-snug">
                    {item.sublabel}
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
