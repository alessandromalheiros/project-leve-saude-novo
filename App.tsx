import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { PlansSection } from './components/PlansSection';
import { NetworkSection } from './components/NetworkSection';
import { BenefitsSection } from './components/BenefitsSection';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { WhatsAppIcon } from './components/ui/Icons';
import { trackAndOpenWhatsApp } from './utils/analytics';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 antialiased relative bg-[#f9f9f9]">
      <Header />

      {/* Floating WA Button */}
      <a 
        onClick={() => trackAndOpenWhatsApp('Botão Flutuante')}
        className="cursor-pointer fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group animate-pulse hover:animate-none"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8 text-white" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Tire suas dúvidas em 1 clique
        </span>
      </a>

      <Hero />
      <StatsSection />
      <PlansSection />
      <TestimonialsSection />
      <NetworkSection />
      <BenefitsSection />
      <FaqSection />
      
      {/* Call to Action Section */}
      <section id="contact" className="bg-[#4a0d4a] py-16 text-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Pronto para viver mais Leve?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Fale agora com um consultor especialista da Vortex e encontre o plano perfeito para você.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => trackAndOpenWhatsApp('Rodapé')}
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition transform hover:-translate-y-1 shadow-lg gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
              Quero falar no WhatsApp
            </button>
            <button 
              onClick={() => document.getElementById('simulacao')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4a0d4a] font-bold rounded-lg hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;