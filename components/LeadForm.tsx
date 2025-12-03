import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { WHATSAPP_NUMBER, PABBLY_WEBHOOK_URL, WHATSAPP_MESSAGE } from '../constants';

// Adicionando tipagem para o objeto fbq do window
declare global {
  interface Window {
    fbq: any;
  }
}

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

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Função auxiliar para ler cookies (usada para pegar _fbp e _fbc)
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return '';
  };

  // Máscara de telefone
  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
      .slice(0, 15);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const openWhatsApp = () => {
    // Rastreamento do Facebook Pixel - Evento Contact
    if (window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp Form Alternative',
        content_category: 'Communication'
      });
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Lógica de Separação de Nome para o Bigin CRM
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '.';

    // Captura de dados avançados para API de Conversões (CAPI)
    const fbp = getCookie('_fbp'); // Browser ID
    const fbc = getCookie('_fbc'); // Click ID (se vier de anúncio)
    const userAgent = navigator.userAgent; // Dados do navegador
    const pageUrl = window.location.href;
    
    // Geração de ID Único de Evento para Deduplicação (O segredo do CAPI)
    const eventId = 'lead-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);

    // Dispara evento de Lead no navegador (Pixel Front-end) com o EventID
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Cadastro Landing Page',
        currency: 'BRL',
        value: 0 // Pode ajustar se tiver um valor médio de lead
      }, { eventID: eventId }); // Importante: Passa o ID para o Facebook deduplicar
    }

    // Preparando dados para enviar ao Pabbly
    const dataToSend = {
      full_name: formData.name,
      first_name: firstName,
      last_name: lastName,
      phone: formData.phone,
      email: formData.email,
      source: 'Landing Page Leve',
      date: new Date().toISOString(),
      // Dados extras para o Facebook CAPI
      event_id: eventId, // Mapeie isso no Pabbly (campo Event ID)
      facebook_fbp: fbp || '',
      facebook_fbc: fbc || '',
      user_agent: userAgent,
      event_source_url: pageUrl
    };

    try {
      if (PABBLY_WEBHOOK_URL) {
        await fetch(PABBLY_WEBHOOK_URL, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: { 'Content-Type': 'application/json' }
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Dados capturados (Simulação):", dataToSend);
      }
      
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setIsSuccess(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-green-500 text-center h-[420px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Solicitação Recebida!</h3>
        <p className="text-gray-500 mb-6">Em instantes um de nossos consultores entrará em contato com você.</p>
        <button
          onClick={openWhatsApp}
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition flex items-center gap-2"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Falar Agora no WhatsApp
        </button>
        <button 
            onClick={() => setIsSuccess(false)}
            className="mt-4 text-sm text-gray-400 hover:text-gray-600 underline"
        >
            Voltar ao formulário
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-leve-orange relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 z-10">
        <Clock className="w-3 h-3" /> Oferta por tempo limitado
      </div>

      <h3 className="text-2xl font-heading font-bold text-gray-800 mb-1 text-center">
        Simule com Desconto
      </h3>
      <p className="text-gray-500 mb-6 text-base text-center">
        Garanta a tabela promocional com <strong>Redução de Carência*</strong>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Seu Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-leve-purple focus:border-transparent outline-none transition text-base"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Seu WhatsApp / Celular</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(21) 99999-9999"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-leve-purple focus:border-transparent outline-none transition text-base"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
            Seu E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu melhor e-mail"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-leve-purple focus:border-transparent outline-none transition text-base"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-leve-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-md flex items-center justify-center gap-2 text-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Processando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" /> Simular Agora
            </>
          )}
        </button>
      </form>

      <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">Ou agilize pelo Zap</span>
          <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <button
        type="button"
        onClick={openWhatsApp}
        className="w-full bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 text-base"
      >
        <WhatsAppIcon className="w-6 h-6 text-green-600" />
        Conversar no WhatsApp
      </button>
      
      <div className="text-center mt-3 text-xs text-gray-400">
        Seus dados estão seguros e protegidos.
      </div>
    </div>
  );
};
