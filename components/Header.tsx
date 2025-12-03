import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

// SVG Inline do WhatsApp para garantir a identidade visual exata
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.72 2.006-1.415.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    // Rastreamento do Facebook Pixel - Evento Contact
    if (window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp Header',
        content_category: 'Communication'
      });
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo + Selo de Corretora Autorizada */}
          <div className="flex items-center gap-4">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex-shrink-0 cursor-pointer">
              <Logo className="h-10 sm:h-12 w-auto" showSlogan={false} />
            </a>
            
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full border border-gray-200 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                Corretora Autorizada
              </span>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#planos" 
              onClick={(e) => handleNavClick(e, 'planos')}
              className="text-gray-600 hover:text-leve-purple font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Nossos Planos
            </a>
            <a 
              href="#rede" 
              onClick={(e) => handleNavClick(e, 'rede')}
              className="text-gray-600 hover:text-leve-purple font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Rede de Atendimento
            </a>
            <a 
              href="#beneficios" 
              onClick={(e) => handleNavClick(e, 'beneficios')}
              className="text-gray-600 hover:text-leve-purple font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Benefícios
            </a>
            <button 
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              Falar no WhatsApp
            </button>
          </nav>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-leve-purple focus:outline-none p-2"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu de Navegação Mobile */}
      <div className={`md:hidden bg-white border-t border-gray-100 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {/* Selo Mobile */}
          <div className="flex items-center justify-center gap-2 mb-4 pb-4 border-b border-gray-50">
            <ShieldCheck className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              Corretora Autorizada Leve Saúde
            </span>
          </div>

          <a 
            href="#planos" 
            onClick={(e) => handleNavClick(e, 'planos')}
            className="block px-4 py-3 text-gray-600 hover:text-leve-purple hover:bg-purple-50 rounded-lg font-medium text-center"
          >
            Nossos Planos
          </a>
          <a 
            href="#rede" 
            onClick={(e) => handleNavClick(e, 'rede')}
            className="block px-4 py-3 text-gray-600 hover:text-leve-purple hover:bg-purple-50 rounded-lg font-medium text-center"
          >
            Rede de Atendimento
          </a>
          <a 
            href="#beneficios" 
            onClick={(e) => handleNavClick(e, 'beneficios')}
            className="block px-4 py-3 text-gray-600 hover:text-leve-purple hover:bg-purple-50 rounded-lg font-medium text-center"
          >
            Benefícios
          </a>
          <button 
            onClick={() => { setIsOpen(false); openWhatsApp(); }}
            className="w-full mt-4 bg-green-500 text-white px-4 py-4 rounded-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition"
          >
            <WhatsAppIcon className="w-6 h-6 text-white" />
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
};
