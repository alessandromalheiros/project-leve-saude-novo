import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { PLANS } from '../constants';
import { WhatsAppIcon } from './ui/Icons';
import { trackAndOpenWhatsApp } from '../utils/analytics';
import { Plan } from '../types';

export const PlansSection: React.FC = () => {
  const [isPME, setIsPME] = useState(false);
  const [withCopay, setWithCopay] = useState(true);

  const getPrices = (plan: Plan) => {
    if (isPME) {
      return withCopay ? plan.prices.pme.withCopay : plan.prices.pme.withoutCopay;
    }
    return withCopay ? plan.prices.individual.withCopay : plan.prices.individual.withoutCopay;
  };

  return (
    <section id="planos" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#4a0d4a] mb-4">
            Escolha o plano ideal
          </h2>
          <p className="text-gray-600 mb-8">
            Tabela especial para quem busca qualidade e economia no Rio de Janeiro.
          </p>

          <div className="flex flex-col items-center gap-4">
            {/* PME vs Individual */}
            <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-gray-200 relative">
              <button 
                onClick={() => setIsPME(false)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 z-10 ${!isPME ? 'bg-[#4a0d4a] text-white shadow-sm' : 'text-gray-500 hover:text-[#4a0d4a]'}`}
              >
                Para Você/Família
              </button>
              <button 
                onClick={() => setIsPME(true)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 z-10 ${isPME ? 'bg-[#4a0d4a] text-white shadow-sm' : 'text-gray-500 hover:text-[#4a0d4a]'}`}
              >
                Para Empresa (CNPJ)
              </button>
            </div>

            {/* Copay Toggle */}
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
              <span className={`text-sm font-medium ${!withCopay ? 'text-[#ff6b35] font-bold' : 'text-gray-500'}`}>Sem Coparticipação</span>
              <button 
                onClick={() => setWithCopay(!withCopay)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${withCopay ? 'bg-[#4a0d4a]' : 'bg-gray-300'}`}
              >
                <span
                  className={`${
                    withCopay ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-sm font-medium ${withCopay ? 'text-[#4a0d4a] font-bold' : 'text-gray-500'}`}>Com Coparticipação</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-2xl border-2 flex flex-col ${plan.highlight ? 'border-[#ff6b35] shadow-xl scale-105 z-10 ring-4 ring-orange-50' : 'border-gray-200 shadow-lg'} ${plan.color} transition-all duration-300 hover:shadow-2xl`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff6b35] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Popular
                </div>
              )}
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-[#4a0d4a] mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-4 min-h-[2.5rem]">{plan.audience}</p>
                
                {/* Price Table */}
                <div className="mb-6 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  {getPrices(plan).map((priceItem, idx) => (
                    <div key={idx} className={`flex justify-between items-center py-1 ${idx !== 2 ? 'border-b border-gray-200' : ''}`}>
                      <span className="text-xs text-gray-600 font-medium">{priceItem.label}:</span>
                      <div className="flex items-baseline">
                        <span className="text-xs text-[#ff6b35] font-bold mr-0.5">R$</span>
                        <span className="text-base font-heading font-bold text-[#ff6b35]">{priceItem.value}</span>
                      </div>
                    </div>
                  ))}
                  <div className="text-[10px] text-gray-400 text-center mt-2">
                    {isPME ? 'Por pessoa (Tabela PME)' : 'Por pessoa (Tabela PF)'}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <div className="bg-green-100 rounded-full p-0.5 mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <button 
                  onClick={() => trackAndOpenWhatsApp(`Card ${plan.name}`)}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg text-center font-bold transition transform active:scale-95 ${
                    plan.highlight 
                      ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-green-200' 
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  <WhatsAppIcon className={`w-5 h-5 ${plan.highlight ? 'text-white' : 'text-green-700'}`} />
                  Escolher este plano
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};