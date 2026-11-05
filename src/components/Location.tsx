import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, Building, Store } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const Location: React.FC = () => {
  const { locations, businessHours, phone, email } = COMPANY_CONFIG;
  const [activeTab, setActiveTab] = useState<string>('loja-centro');

  const currentLocation = locations.find((loc) => loc.id === activeTab) || locations[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 text-[#073B78] text-xs font-bold uppercase tracking-wider">
            <span>Nossas Unidades em Franco da Rocha</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] font-display text-balance">
            Nossas Lojas & Sede Central
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium">
            Estamos presentes em dois pontos estratégicos de Franco da Rocha para melhor atender você.
          </p>
        </div>

        {/* Location Switcher Tabs (Mobile-First Touch Target) */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-[#F3F6FA] rounded-xl max-w-md mx-auto mb-8 border border-slate-200">
          {locations.map((loc) => {
            const isActive = loc.id === activeTab;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc.id)}
                className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#073B78] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#073B78] hover:bg-white/60'
                }`}
              >
                {loc.id === 'central' ? (
                  <Building className="w-4 h-4 text-[#F58220]" />
                ) : (
                  <Store className="w-4 h-4 text-[#F58220]" />
                )}
                <span>{loc.title}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#F3F6FA] border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Active Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 text-[#F58220] text-xs font-extrabold uppercase tracking-wide">
                <span>{currentLocation.badge}</span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#073B78] text-[#F58220] shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#073B78] mb-1">
                    {currentLocation.title}
                  </h3>
                  <p className="text-sm font-extrabold text-[#062B55] leading-snug">
                    {currentLocation.street}, {currentLocation.complement}
                  </p>
                  <p className="text-xs text-slate-700 font-semibold">
                    {currentLocation.neighborhood} - {currentLocation.city} / {currentLocation.state}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    CEP: {currentLocation.zipCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#073B78] text-white shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#F58220]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#073B78] mb-1">
                    Horário de Atendimento
                  </h3>
                  <p className="text-xs font-semibold text-slate-700">
                    {businessHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#073B78] text-white shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#F58220]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#073B78] mb-1">
                    Atendimento / WhatsApp
                  </h3>
                  <a
                    href={COMPANY_CONFIG.getWhatsAppLink(`Olá! Gostaria de falar com a equipe da unidade ${currentLocation.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-extrabold text-[#062B55] hover:text-[#F58220] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#073B78] text-white shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#F58220]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#073B78] mb-1">
                    E-mail
                  </h3>
                  <p className="text-xs font-semibold text-slate-700">
                    {email}
                  </p>
                </div>
              </div>

            </div>

            {/* Navigation Button */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <a
                href={currentLocation.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#073B78] hover:bg-[#062B55] text-white font-bold text-sm transition-all shadow-md active:scale-98"
              >
                <Navigation className="w-4 h-4 text-[#F58220]" />
                <span>Abrir rota no Google Maps ({currentLocation.title})</span>
              </a>
            </div>

          </div>

          {/* Map Embed or Dual Location Cards View */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Embedded Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[320px] sm:h-[380px] lg:h-[400px]">
              <iframe
                title={`Mapa da ${currentLocation.title}`}
                src={currentLocation.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px]"
              />
            </div>

            {/* Quick Dual Cards Summary for Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => setActiveTab(loc.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    loc.id === activeTab
                      ? 'bg-white border-[#073B78] shadow-md ring-2 ring-[#073B78]/20'
                      : 'bg-[#F3F6FA] border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold text-[#062B55]">{loc.title}</span>
                    <span className="text-[10px] font-bold text-[#F58220] uppercase">{loc.badge}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium truncate">{loc.street}, {loc.complement}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
