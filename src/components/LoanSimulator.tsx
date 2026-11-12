import React, { useState, useId } from 'react';
import { Calculator, MessageSquare, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { useMagneticButton } from '../utils/motion';

export const LoanSimulator: React.FC = () => {
  const { simulator } = COMPANY_CONFIG;
  const magneticRef = useMagneticButton(5);
  const propertyInputId = useId();
  const downPaymentInputId = useId();
  const termInputId = useId();

  const [propertyValue, setPropertyValue] = useState<number>(simulator.defaultPropertyVal);
  const [downPayment, setDownPayment] = useState<number>(simulator.defaultDownPayment);
  const [months, setMonths] = useState<number>(simulator.defaultMonths);

  // Valor financiado
  const financedAmount = Math.max(0, propertyValue - downPayment);

  // Cálculo da parcela inicial estimada pelo Sistema de Amortização (SAC / Price ilustrativo)
  // Taxa mensal proporcional didática configurada
  const monthlyRate = simulator.indicativeAnnualRate / 12;
  const amortization = months > 0 ? financedAmount / months : 0;
  const initialInterest = financedAmount * monthlyRate;
  const estimatedInstallment = Math.round(amortization + initialInterest);

  const formatBRL = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  const handlePropertyChange = (newVal: number) => {
    setPropertyValue(newVal);
    // Garante que a entrada mínima sugerida seja proporcional (~20%)
    const minDown = Math.round(newVal * 0.2);
    if (downPayment < minDown) {
      setDownPayment(minDown);
    }
  };

  const whatsappMessage = `Olá! Fiz uma simulação no site da Fourcred com os dados:\n• Valor do imóvel: ${formatBRL(propertyValue)}\n• Entrada: ${formatBRL(downPayment)}\n• Prazo: ${months} meses (${(months / 12).toFixed(0)} anos)\n• Parcela inicial estimada: ~${formatBRL(estimatedInstallment)}\nGostaria de avaliar minhas condições oficiais junto à Caixa.`;

  return (
    <section id="simulador" className="py-20 bg-white dark:bg-[#030F1E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Simulador de Parcela</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
            Calcule uma estimativa para o seu imóvel
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Ajuste os valores abaixo para simular a composição da sua entrada, prazo e parcela aproximada.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#F3F6FA] dark:bg-[#07192E] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controles de Sliders */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Campo 1: Valor do Imóvel */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={propertyInputId} className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Valor do Imóvel
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#073B78] dark:text-[#FFA34D] font-mono">
                    {formatBRL(propertyValue)}
                  </span>
                </div>
                <input
                  id={propertyInputId}
                  type="range"
                  min={simulator.minPropertyVal}
                  max={simulator.maxPropertyVal}
                  step={10000}
                  value={propertyValue}
                  onChange={(e) => handlePropertyChange(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#F58220]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                  <span>{formatBRL(simulator.minPropertyVal)}</span>
                  <span>{formatBRL(simulator.maxPropertyVal)}</span>
                </div>
              </div>

              {/* Campo 2: Valor da Entrada */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={downPaymentInputId} className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Valor da Entrada (recursos próprios ou FGTS)
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#073B78] dark:text-[#FFA34D] font-mono">
                    {formatBRL(downPayment)}
                  </span>
                </div>
                <input
                  id={downPaymentInputId}
                  type="range"
                  min={Math.round(propertyValue * 0.1)}
                  max={Math.round(propertyValue * 0.8)}
                  step={5000}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#F58220]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                  <span>10% ({formatBRL(Math.round(propertyValue * 0.1))})</span>
                  <span>80% ({formatBRL(Math.round(propertyValue * 0.8))})</span>
                </div>
              </div>

              {/* Campo 3: Prazo em Meses */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={termInputId} className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Prazo de Financiamento
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#073B78] dark:text-[#FFA34D] font-mono">
                    {months} meses ({(months / 12).toFixed(0)} anos)
                  </span>
                </div>
                <input
                  id={termInputId}
                  type="range"
                  min={simulator.minMonths}
                  max={simulator.maxMonths}
                  step={12}
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#F58220]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                  <span>10 anos (120 m)</span>
                  <span>35 anos (420 m)</span>
                </div>
              </div>

            </div>

            {/* Painel do Resultado e Botão WhatsApp */}
            <div className="lg:col-span-5 bg-white dark:bg-[#030F1E] rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
              
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F58220]/10 text-[#F58220] text-[11px] font-extrabold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Estimativa de Parcela
                </span>

                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Primeira parcela estimada:
                </p>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#062B55] dark:text-white font-display mt-1 tracking-tight">
                  {formatBRL(estimatedInstallment)}
                  <span className="text-xs font-semibold text-slate-500 ml-1">/mês*</span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>Valor a financiar:</span>
                    <strong className="text-slate-800 dark:text-slate-100 font-mono">{formatBRL(financedAmount)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Entrada informada:</span>
                    <strong className="text-slate-800 dark:text-slate-100 font-mono">{formatBRL(downPayment)}</strong>
                  </div>
                </div>
              </div>

              {/* Botão de Enviar Simulação no WhatsApp */}
              <div className="space-y-3">
                <a
                  ref={magneticRef as React.RefObject<HTMLAnchorElement>}
                  href={COMPANY_CONFIG.getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F58220] hover:bg-[#FFA34D] text-white font-extrabold text-sm transition-all shadow-md active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar minha simulação no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Aviso Destacado de Estimativa */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-900 dark:text-amber-200 leading-snug">
                  <AlertCircle className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                  <span>{simulator.disclaimer}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
