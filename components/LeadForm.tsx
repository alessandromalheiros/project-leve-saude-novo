import React, { useState } from 'react';
import { Clock, Loader2, CheckCircle, Send } from 'lucide-react';
import { WhatsAppIcon } from './ui/Icons';
import { trackAndOpenWhatsApp } from '../utils/analytics';
import { PABBLY_WEBHOOK_URL } from '../constants';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getCookie = (name: string) => {
    if (typeof document === 'undefined') return '';
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return '';
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '.';

    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');
    const userAgent = navigator.userAgent;
    const pageUrl = window.location.href;
    const eventId = 'lead-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);

    const win = window as any;
    if (win.fbq) {
      win.fbq('track', 'Lead', {
        content_name: 'Cadastro Landing Page',
        currency: 'BRL',
        value: 0
      }, { eventID: eventId });
    } else {
      console.log("FB Pixel Track: Lead (Mocked)");
    }

    const dataToSend = {
      full_name: formData.name,
      first_name: firstName,
      last_name: lastName,
      phone: formData.phone,
      email: formData.email,
      source: 'Landing Page Leve',
      date: new Date().toISOString(),
      event_id: eventId,
      facebook_fbp: fbp || '',
      facebook_fbc: fbc || '',
      user_agent: userAgent,
      event_source_url: pageUrl
    };

    try {
      // Send data to Pabbly Webhook
      // Using no-cors to prevent CORS errors since we just need to fire and forget usually,
      // but standard POST is better if Pabbly supports it (it typically does).
      const response = await fetch(PABBLY_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      console.log("Dados enviados para Pabbly:", dataToSend);
      
      // Even if response is not 200 OK due to CORS opacity in some configs, we assume success for user UX
      // Ideally check response.ok if CORS allows
      
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      console.error("Erro ao enviar para Pabbly:", error);
      // Still show success to user to not block them, but log error
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
          onClick={() => trackAndOpenWhatsApp('Success Screen')}
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
    <div className="bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-[#ff6b35] relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 z-10">
        <Clock className="w-3 h-3" /> Oferta por tempo limitado
      </div>

      <h3 className="text-2xl font-heading font-bold text-gray-800 mb-1 text-center">
        Simule com Desconto
      </h3>
      <p className="text-gray-500 mb-6 text-base text-center">
        Garanta a tabela promocional de Novembro com <strong>Redução de Carência*</strong>.
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4a0d4a] focus:border-transparent outline-none transition text-base"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4a0d4a] focus:border-transparent outline-none transition text-base"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4a0d4a] focus:border-transparent outline-none transition text-base"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#ff6b35] hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-md flex items-center justify-center gap-2 text-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Processando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" /> Quero minha cotação
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
        onClick={() => trackAndOpenWhatsApp('Formulário - Botão Alternativo')}
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