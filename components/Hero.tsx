import React from 'react';
import { Star, MapPin, Check } from 'lucide-react';
import { LeadForm } from './LeadForm';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544655152-4dc375bc5a3a?auto=format&fit=crop&q=80&w=1920" 
          alt="Casal sénior feliz e saudável no Rio de Janeiro" 
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a0d4a]/95 via-[#4a0d4a]/80 to-[#4a0d4a]/40 lg:bg-gradient-to-r lg:from-[#4a0d4a]/95 lg:via-[#4a0d4a]/80 lg:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-2 bg-[#ff6b35] text-white px-4 py-1.5 rounded-full font-bold text-sm mb-6 shadow-lg animate-pulse">
              <Star className="w-4 h-4 fill-current" /> ESPECIAL PARA 49+
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 drop-shadow-md">
              Chegaram os Novos <br/>Planos <span className="text-orange-400">Leve Saúde</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              O cuidado que você merece, com rede própria de excelência e preços a partir de <strong className="text-white">R$ 450,65</strong>*.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm font-medium text-white mb-6">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <MapPin className="w-5 h-5 text-green-400" /> Rede Própria Exclusiva
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <Check className="w-5 h-5 text-green-400" /> Preço Justo
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <Check className="w-5 h-5 text-green-400" /> App e Telemedicina
              </div>
            </div>
            <p className="text-[10px] text-purple-200 mt-2 opacity-80 max-w-lg lg:mx-0 mx-auto">
              *Valor referente à faixa etária de 49 a 53 anos no plano Leve Top 100 Individual com coparticipação. Consulte condições.
            </p>
          </div>

          <div className="lg:w-1/2 w-full max-w-md mx-auto lg:ml-auto" id="simulacao">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};