import React from 'react';
import { Heart, Building2 } from 'lucide-react';
import { BENEFITS, PHARMACIES } from '../constants';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#4a0d4a] mb-4">
            Benefícios Exclusivos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Muito além de consultas e exames. Um ecossistema completo de saúde.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="group text-center">
              <div className="w-20 h-20 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4a0d4a] group-hover:text-white transition-all duration-300 transform group-hover:rotate-3">
                <benefit.icon className="w-10 h-10 text-[#4a0d4a] group-hover:text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-white rounded-2xl shadow-md border border-red-100 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-pink-500"></div>
            <div className="flex items-center justify-center gap-2 mb-6 text-gray-500 font-medium uppercase text-xs tracking-widest">
              <Heart className="w-4 h-4 text-red-500" /> Clube de Vantagens
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Descontos em Medicamentos
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {PHARMACIES.map((pharmacy, idx) => (
                <div key={idx} className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md hover:border-red-200 transition-all transform hover:-translate-y-1">
                  <Building2 className={`w-5 h-5 ${pharmacy.color}`} />
                  <span className="text-lg md:text-xl font-bold text-gray-800">{pharmacy.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-500">Até 45% OFF em farmácias parceiras apresentando sua carteirinha.</p>
        </div>
      </div>
    </section>
  );
};