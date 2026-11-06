import React from 'react';
import { X, Check, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

interface ServiceModalProps {
  service: typeof COMPANY_CONFIG.services[0] | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#07192E] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-900 dark:text-slate-100">
        
        {/* Header Bar */}
        <div className="bg-[#062B55] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-2.5 py-1 rounded bg-[#F58220] text-white text-[11px] font-bold uppercase tracking-wider mb-2">
            {service.shortTitle}
          </span>
          <h3 className="text-2xl font-extrabold font-display">{service.title}</h3>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {service.description}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#073B78] dark:text-[#F58220] mb-3">
              Diferenciais desta solução:
            </h4>
            <div className="space-y-2.5">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#F58220]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <a
              href={COMPANY_CONFIG.getWhatsAppLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F58220] hover:bg-[#FFA34D] text-white font-bold text-sm transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar com especialista sobre {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
