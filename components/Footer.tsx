import React from 'react';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { BrokerLogo } from './ui/Logos';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <a href="#home" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="inline-block mb-6 cursor-pointer no-underline">
              <BrokerLogo className="h-12 w-auto" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A Vortex Corretagem de Seguros é especializada em planos de saúde, com foco em atendimento humanizado e consultoria especializada.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-white transition">
                <Phone className="w-5 h-5 text-[#ff6b35] mt-1" />
                <div>
                  <span className="block text-xs uppercase tracking-wider mb-1">Telefone</span>
                  <a href="tel:2137987776" className="text-lg font-medium hover:text-[#ff6b35] transition">(21) 3798-7776</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-white transition">
                <MapPin className="w-5 h-5 text-[#ff6b35] mt-1" />
                <div>
                    <span className="block text-xs uppercase tracking-wider mb-1">Endereço</span>
                    <span>Pechincha, Rio de Janeiro - RJ</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Redes Sociais</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/vortexplanosdesaude" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff6b35] hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/vortexplanosdesaude" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500">
              Siga-nos para dicas de saúde e novidades sobre os planos.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} Vortex Corretagem de Seguros - CNPJ: 42.974.952/0001-56. Todos os direitos reservados.</p>
          <p className="max-w-4xl mx-auto leading-relaxed opacity-60">
            A Vortex Corretagem de Seguros é uma corretora autorizada para comercialização dos produtos Leve Saúde. 
            As informações de preços, carências e redes credenciadas estão sujeitas a alterações pela operadora sem aviso prévio. 
            Consulte sempre o guia oficial atualizado no momento da contratação.
          </p>
        </div>
      </div>
    </footer>
  );
};