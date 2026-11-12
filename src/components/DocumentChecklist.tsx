import React, { useState } from 'react';
import { CheckSquare, Square, MessageSquare, ArrowRight, User, Home, FileText } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const DocumentChecklist: React.FC = () => {
  const [tab, setTab] = useState<'buyer' | 'seller'>('buyer');
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const list = COMPANY_CONFIG.documentChecklist[tab];
  const total = list.length;
  const readyCount = list.filter((item) => checkedItems[item.id]).length;
  const progressPercent = Math.round((readyCount / total) * 100);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getMissingMessage = () => {
    const missing = list.filter((item) => !checkedItems[item.id]).map(i => i.label);
    const text = `Olá! Estive conferindo o checklist de documentos no site da Fourcred (${tab === 'buyer' ? 'Comprador' : 'Vendedor'}). Já reuni ${readyCount} de ${total} documentos e gostaria de tirar dúvidas sobre o restante para dar entrada.`;
    return text;
  };

  return (
    <section id="checklist" className="py-20 bg-white dark:bg-[#030F1E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Checklist Interativo</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
            Checklist de Documentos para Financiamento
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Selecione o seu perfil, marque os itens que você já tem em mãos e veja o que falta para darmos andamento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#F3F6FA] dark:bg-[#07192E] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-md">
          
          {/* Seletor de Abas Comprador / Vendedor */}
          <div className="flex items-center justify-center gap-2 p-1.5 bg-white dark:bg-[#030F1E] rounded-2xl max-w-sm mx-auto mb-8 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setTab('buyer')}
              className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                tab === 'buyer'
                  ? 'bg-[#073B78] dark:bg-[#F58220] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#073B78]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Comprador</span>
            </button>

            <button
              type="button"
              onClick={() => setTab('seller')}
              className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                tab === 'seller'
                  ? 'bg-[#073B78] dark:bg-[#F58220] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#073B78]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Vendedor / Imóvel</span>
            </button>
          </div>

          {/* Barra de Progresso e Contador */}
          <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-[#030F1E] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Status da sua documentação:</span>
              <p className="text-base font-extrabold text-[#062B55] dark:text-white">
                {readyCount} de {total} documentos prontos ({progressPercent}%)
              </p>
            </div>

            <div className="w-full sm:w-48 h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shrink-0">
              <div
                className="h-full bg-[#F58220] rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Lista com Checkboxes Clicáveis */}
          <div className="space-y-3">
            {list.map((doc) => {
              const isChecked = !!checkedItems[doc.id];
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleItem(doc.id)}
                  className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                      : 'bg-white dark:bg-[#030F1E] border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="mt-0.5 shrink-0 text-[#F58220]">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs sm:text-sm font-semibold leading-snug ${
                      isChecked
                        ? 'text-emerald-900 dark:text-emerald-200 line-through opacity-85'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {doc.label}
                    </p>
                    {doc.mandatory && !isChecked && (
                      <span className="text-[10px] font-bold text-[#F58220] mt-0.5 inline-block">
                        Obrigatório para início
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botão de Ação: Falar sobre o que falta */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
              Ficou com dúvida sobre a emissão de algum documento?
            </span>

            <a
              href={COMPANY_CONFIG.getWhatsAppLink(getMissingMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F58220] hover:bg-[#FFA34D] text-white font-extrabold text-xs shadow-md transition-all active:scale-98"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar sobre o que falta</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
