import React from 'react';
import { MapPin, Hospital, Microscope, ShieldCheck } from 'lucide-react';
import { OWN_CLINICS, NETWORK_PARTNERS } from '../constants';

export const NetworkSection: React.FC = () => {
  return (
    <section id="rede" className="py-16 bg-gray-50 border-b border-gray-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-[#4a0d4a] mb-4">
            Nossa Rede de Atendimento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A união perfeita entre a nossa estrutura própria e os melhores parceiros credenciados.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Leve Clínicas */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 relative overflow-hidden transform hover:scale-[1.01] transition-all">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ff6b35] to-[#ff8c61]"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-orange-100 text-[#ff6b35] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#4a0d4a]">Leve Clínicas</h3>
                    <p className="text-sm text-gray-500">Atendimento padrão ouro em 12 unidades</p>
                </div>
              </div>
              <div className="bg-orange-50 text-[#ff6b35] px-4 py-2 rounded-lg text-sm font-semibold">
                  Exclusividade Leve Saúde
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {OWN_CLINICS.map((clinic, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-[#ff6b35]"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{clinic.name}</h4>
                    <p className="text-xs text-gray-500">{clinic.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hospitais */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4a0d4a] to-[#6d2e6d]"></div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-purple-100 text-[#4a0d4a] rounded-lg flex items-center justify-center">
                  <Hospital className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#4a0d4a]">Hospitais</h3>
                    <p className="text-sm text-gray-500">Parceiros de confiança perto de você</p>
                </div>
              </div>
              <div className="columns-1 lg:columns-2 gap-8 space-y-8">
                {NETWORK_PARTNERS.hospitals.map((group, idx) => (
                  <div key={idx} className="break-inside-avoid bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="text-[#ff6b35] font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-200 pb-2">
                      {group.region}
                    </h4>
                    <ul className="space-y-2">
                      {group.list.map((hospital, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4a0d4a] flex-shrink-0"></div>
                          {hospital}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
          </div>

          {/* Labs */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <Microscope className="w-6 h-6" />
              </div>
              <div>
                  <h3 className="text-xl font-bold text-[#4a0d4a]">Laboratórios</h3>
                  <p className="text-sm text-gray-500">Exames com tecnologia de ponta</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {NETWORK_PARTNERS.labs.map((lab, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-blue-200 transition hover:shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-700">{lab}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};