import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle2, AlertCircle, Building, Store } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const Contact: React.FC = () => {
  const { phone, email, locations, instagram, instagramHandle } = COMPANY_CONFIG;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Crédito habitacional',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      const waMsg = `*Novo Contato do Site*\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*E-mail:* ${formData.email}\n*Serviço:* ${formData.service}\n*Mensagem:* ${formData.message}`;
      const waUrl = COMPANY_CONFIG.getWhatsAppLink(waMsg);
      
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contato" className="py-16 sm:py-20 bg-white dark:bg-[#030F1E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <span>Fale Conosco</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
            Entre em contato com nossos especialistas.
          </h2>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Estamos prontos para tirar suas dúvidas e orientar a melhor escolha financeira.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6 bg-[#F3F6FA] dark:bg-[#07192E] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#062B55] dark:text-white font-display mb-1.5">
                Canais Oficiais Fourcred
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Utilize os telefones e endereços das nossas unidades em Franco da Rocha.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#073B78] text-[#F58220] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#073B78] dark:text-[#F58220] uppercase tracking-wider">Telefone & WhatsApp</p>
                  <a
                    href={COMPANY_CONFIG.getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-extrabold text-[#062B55] dark:text-white hover:text-[#F58220] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#073B78] text-white shrink-0">
                  <Mail className="w-5 h-5 text-[#F58220]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#073B78] dark:text-[#F58220] uppercase tracking-wider">E-mail</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-bold text-[#062B55] dark:text-white hover:text-[#F58220] transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Central Office */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-[#073B78] text-white shrink-0">
                  <Building className="w-5 h-5 text-[#F58220]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#073B78] dark:text-[#F58220] uppercase tracking-wider">{locations[0].title}</p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {locations[0].street}, {locations[0].complement}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {locations[0].neighborhood} - {locations[0].city} / {locations[0].state}
                  </p>
                </div>
              </div>

              {/* Store Location */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-[#073B78] text-white shrink-0">
                  <Store className="w-5 h-5 text-[#F58220]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#073B78] dark:text-[#F58220] uppercase tracking-wider">{locations[1].title}</p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {locations[1].street}, {locations[1].complement}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {locations[1].neighborhood} - {locations[1].city} / {locations[1].state} (CEP: {locations[1].zipCode})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-[#073B78] text-white shrink-0">
                  <Instagram className="w-5 h-5 text-[#F58220]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#073B78] dark:text-[#F58220] uppercase tracking-wider">Instagram Oficial</p>
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#062B55] dark:text-white hover:text-[#F58220] transition-colors"
                  >
                    {instagramHandle}
                  </a>
                </div>
              </div>

            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-[#030F1E] border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <p className="font-bold text-[#062B55] dark:text-white">Horário de atendimento:</p>
              <p>{COMPANY_CONFIG.businessHours}</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#07192E] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            
            <h3 className="text-lg sm:text-xl font-bold text-[#062B55] dark:text-white font-display mb-5">
              Envie uma mensagem
            </h3>

            {status === 'success' ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">Mensagem Processada!</h4>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed font-medium">
                  Sua solicitação foi enviada para nosso atendimento via WhatsApp ({phone}).
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', phone: '', email: '', service: 'Crédito habitacional', message: '' });
                  }}
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs min-h-[44px]"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="w-full min-h-[44px] px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#030F1E] text-slate-900 dark:text-slate-100 focus:border-[#073B78] dark:focus:border-[#F58220] focus:ring-2 focus:ring-[#073B78]/20 outline-none text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99991-0509"
                      required
                      className="w-full min-h-[44px] px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#030F1E] text-slate-900 dark:text-slate-100 focus:border-[#073B78] dark:focus:border-[#F58220] focus:ring-2 focus:ring-[#073B78]/20 outline-none text-xs font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="w-full min-h-[44px] px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#030F1E] text-slate-900 dark:text-slate-100 focus:border-[#073B78] dark:focus:border-[#F58220] focus:ring-2 focus:ring-[#073B78]/20 outline-none text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full min-h-[44px] px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#030F1E] text-slate-900 dark:text-slate-100 focus:border-[#073B78] dark:focus:border-[#F58220] focus:ring-2 focus:ring-[#073B78]/20 outline-none text-xs font-semibold"
                  >
                    <option value="Crédito habitacional">Crédito habitacional</option>
                    <option value="Seguros">Seguros</option>
                    <option value="Consórcios">Consórcios</option>
                    <option value="Benefícios">Benefícios</option>
                    <option value="Outros">Outros assuntos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva como podemos ajudar..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#030F1E] text-slate-900 dark:text-slate-100 focus:border-[#073B78] dark:focus:border-[#F58220] focus:ring-2 focus:ring-[#073B78]/20 outline-none text-xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#073B78] hover:bg-[#062B55] dark:bg-[#F58220] dark:hover:bg-[#FFA34D] text-white font-bold text-sm transition-all shadow-md active:scale-98 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#F58220] dark:text-white" />
                  <span>{status === 'submitting' ? 'Enviando...' : 'Enviar mensagem para o WhatsApp'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
