import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Logo } from './ui/Logos';
import { WhatsAppIcon } from './ui/Icons';
import { trackAndOpenWhatsApp } from '../utils/analytics';

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

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex items-center gap-4">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex-shrink-0 cursor-pointer no-underline">
              <Logo className="h-10 sm:h-12 w-auto" showSlogan={false} />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#planos" 
              onClick={(e) => handleNavClick(e, 'planos')}
              className="text-gray-600 hover:text-[#4a0d4a] font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Nossos Planos
            </a>
            <a 
              href="#rede" 
              onClick={(e) => handleNavClick(e, 'rede')}
              className="text-gray-600 hover:text-[#4a0d4a] font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Rede
            </a>
            <a 
              href="#beneficios" 
              onClick={(e) => handleNavClick(e, 'beneficios')}
              className="text-gray-600 hover:text-[#4a0d4a] font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Benefícios
            </a>
            <button 
              onClick={() => trackAndOpenWhatsApp('Header Desktop')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              Cotar Agora
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#4a0d4a] focus:outline-none p-2"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden bg-white border-t border-gray-100 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4 pb-4 border-b border-gray-50">
            <ShieldCheck className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              Corretora Autorizada Leve Saúde
            </span>
          </div>

          <a 
            href="#planos" 
            onClick={(e) => handleNavClick(e, 'planos')}
            className="block px-4 py-3 text-gray-600 hover:text-[#4a0d4a] hover:bg-purple-50 rounded-lg font-medium text-center"
          >
            Nossos Planos
          </a>
          <a 
            href="#rede" 
            onClick={(e) => handleNavClick(e, 'rede')}
            className="block px-4 py-3 text-gray-600 hover:text-[#4a0d4a] hover:bg-purple-50 rounded-lg font-medium text-center"
          >
            Rede de Atendimento
          </a>
          <a 
            href="#beneficios" 
            onClick={(e) => handleNavClick(e, 'beneficios')}
            className="block px-4 py-3 text-gray-600 hover:text-[#4a0d4a] hover:bg-purple-50 rounded-lg font-medium text-center"
          >
            Benefícios
          </a>
          <button 
            onClick={() => { setIsOpen(false); trackAndOpenWhatsApp('Menu Mobile'); }}
            className="w-full mt-4 bg-green-500 text-white px-4 py-4 rounded-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition"
          >
            <WhatsAppIcon className="w-6 h-6 text-white" />
            Quero minha cotação
          </button>
        </div>
      </div>
    </header>
  );
};