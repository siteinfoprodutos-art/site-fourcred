import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, MessageSquare, Shield, HelpCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const MultiStepPreAnalysis: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [service, setService] = useState<string>('Crédito Habitacional');
  const [income, setIncome] = useState<string>('R$ 3.000 a R$ 6.000');
  const [hasFgts, setHasFgts] = useState<string>('Sim, pretendo usar FGTS');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');

  const servicesOptions = [
    { label: 'Crédito Habitacional', desc: 'Financiar casa, terreno ou apartamento' },
    { label: 'Seguros', desc: 'Proteção patrimonial, vida e residencial' },
    { label: 'Consórcios', desc: 'Aquisição planejada sem juros' },
    { label: 'Benefícios', desc: 'Planos de saúde e odontológicos' },
  ];

  const incomeOptions = [
    'Até R$ 3.000',
    'R$ 3.000 a R$ 6.000',
    'R$ 6.000 a R$ 10.000',
    'Acima de R$ 10.000',
  ];

  const handleNext = () => {
    setError('');
    if (step === 1 && !service) {
      setError('Selecione uma opção para continuar.');
      return;
    }
    if (step === 2 && (!income || !hasFgts)) {
      setError('Por favor, informe a renda e a condição de FGTS.');
      return;
    }
    if (step < 3) {
      setStep(prev => prev + 1);
    }
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor, preencha o seu nome.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setError('Por favor, informe um WhatsApp válido.');
      return;
    }

    const payload = `*Nova Solicitação de Pré-Análise Fourcred*\n\n• *Interesse:* ${service}\n• *Renda Familiar:* ${income}\n• *Uso do FGTS:* ${hasFgts}\n• *Nome:* ${name}\n• *WhatsApp:* ${phone}\n\nGostaria de receber a orientação preliminar para o meu perfil.`;
    const url = COMPANY_CONFIG.getWhatsAppLink(payload);
    window.open(url, '_blank');
  };

  return (
    <section id="pre-analise" className="py-20 bg-[#F3F6FA] dark:bg-[#07192E] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <span>Pré-Análise em 3 Etapas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
            Descubra as possibilidades para o seu perfil
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Preenchimento rápido em menos de 1 minuto para receber orientação personalizada no WhatsApp.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white dark:bg-[#030F1E] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Barra de Progresso com Transição Suave */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
              <span>Etapa {step} de 3</span>
              <span className="text-[#F58220]">
                {step === 1 && 'Interesse Principal'}
                {step === 2 && 'Renda e FGTS'}
                {step === 3 && 'Contato'}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#073B78] to-[#F58220] transition-all duration-300 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 font-semibold flex items-center gap-2">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Etapa 1: O que você procura */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-[#062B55] dark:text-white">
                1. O que você procura no momento?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {servicesOptions.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setService(opt.label)}
                    className={`p-4 rounded-xl text-left border min-h-[64px] transition-all flex flex-col justify-between ${
                      service === opt.label
                        ? 'border-[#F58220] bg-[#F58220]/10 dark:bg-[#F58220]/15 ring-2 ring-[#F58220]/30'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <span className="text-sm font-extrabold text-[#062B55] dark:text-white">{opt.label}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Etapa 2: Renda e FGTS */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-base font-bold text-[#062B55] dark:text-white mb-3">
                  2. Qual é a sua renda familiar mensal aproximada?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {incomeOptions.map((inc) => (
                    <button
                      key={inc}
                      type="button"
                      onClick={() => setIncome(inc)}
                      className={`p-3.5 rounded-xl text-xs font-bold border transition-all text-left ${
                        income === inc
                          ? 'border-[#F58220] bg-[#F58220]/10 dark:bg-[#F58220]/15 text-[#062B55] dark:text-white ring-2 ring-[#F58220]/30'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {inc}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#062B55] dark:text-white mb-2.5">
                  Possui saldo de FGTS para utilizar?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {['Sim, pretendo usar FGTS', 'Não possuo FGTS', 'Tenho dúvidas sobre o FGTS'].map((fgtsOpt) => (
                    <button
                      key={fgtsOpt}
                      type="button"
                      onClick={() => setHasFgts(fgtsOpt)}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        hasFgts === fgtsOpt
                          ? 'border-[#F58220] bg-[#F58220]/10 dark:bg-[#F58220]/15 text-[#062B55] dark:text-white ring-2 ring-[#F58220]/30'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {fgtsOpt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Etapa 3: Nome e WhatsApp */}
          {step === 3 && (
            <form onSubmit={handleFinish} className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-[#062B55] dark:text-white">
                3. Onde podemos enviar o resultado preliminar?
              </h3>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como prefere ser chamado?"
                  required
                  className="w-full min-h-[44px] px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#07192E] text-slate-900 dark:text-slate-100 focus:border-[#F58220] outline-none text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(11) 99999-9999"
                  required
                  className="w-full min-h-[44px] px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#07192E] text-slate-900 dark:text-slate-100 focus:border-[#F58220] outline-none text-xs font-medium"
                />
              </div>

              {/* Linha LGPD */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Seus dados são protegidos conforme a LGPD e usados exclusivamente para este atendimento.</span>
              </div>
            </form>
          )}

          {/* Botões de Navegação entre Etapas */}
          <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(prev => prev - 1)}
                className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-shimmer min-h-[46px] inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#073B78] hover:bg-[#062B55] dark:bg-[#F58220] dark:hover:bg-[#FFA34D] text-white font-extrabold text-xs shadow-md transition-all active:scale-98"
              >
                <span>Avançar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinish}
                className="btn-shimmer min-h-[48px] inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm shadow-md transition-all active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Receber Análise no WhatsApp</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
