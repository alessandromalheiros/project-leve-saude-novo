import React, { useState } from 'react';
import { Header } from './components/Header';
import { LeadForm } from './components/LeadForm';
import { Logo } from './components/Logo';
import { BrokerLogo } from './components/BrokerLogo';
import { PLANS, STATS, BENEFITS, NETWORK_PARTNERS, FAQ_ITEMS, PHARMACIES, OWN_CLINICS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from './constants';
import { Check, MapPin, Phone, Instagram, Facebook, Heart, Building2, Microscope, Plus, Minus, Star, ShieldCheck, Hospital } from 'lucide-react';

// Componente Ícone WhatsApp Oficial (SVG Corrigido e Limpo)
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

const App: React.FC = () => {
  const [isPME, setIsPME] = useState(false);
  const [withCopay, setWithCopay] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Função para recuperar o array de preços correto com base no estado
  const getPrices = (plan: typeof PLANS[0]) => {
    if (isPME) {
      return withCopay ? plan.prices.pme.withCopay : plan.prices.pme.withoutCopay;
    }
    return withCopay ? plan.prices.individual.withCopay : plan.prices.individual.withoutCopay;
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const openWhatsAppPlan = (planName: string) => {
    // Rastreamento do Facebook Pixel - Evento Contact
    if (window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: `WhatsApp Plan ${planName}`,
        content_category: 'Lead Generation'
      });
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  const handleFloatingClick = () => {
    // Rastreamento do Facebook Pixel - Evento Contact
    if (window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp Floating Button',
        content_category: 'Communication'
      });
    }
  };

  const handleFooterWhatsAppClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp Footer',
        content_category: 'Communication'
      });
    }
  }

  return (
    <div className="font-sans text-gray-800 antialiased relative">
      <Header />

      {/* Botão Flutuante do WhatsApp com Animação de Pulso */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleFloatingClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group animate-pulse hover:animate-none"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8 text-white" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chamar no Zap
        </span>
      </a>

      {/* Seção Hero - Fundo Humanizado */}
      <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1571019614248-c5c7c319e578?auto=format&fit=crop&q=80&w=1920" 
            alt="Mulher feliz se exercitando ao ar livre" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-leve-purple/95 via-leve-purple/90 to-leve-purple/60 lg:bg-gradient-to-r lg:from-leve-purple/95 lg:via-leve-purple/80 lg:to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left text-white">
              <div className="inline-flex items-center gap-2 bg-leve-orange text-white px-4 py-1.5 rounded-full font-bold text-sm mb-6 shadow-lg animate-pulse">
                <Star className="w-4 h-4 fill-current" /> CARÊNCIA REDUZIDA*
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 drop-shadow-md">
                O plano da sua vida <br/>
                <span className="text-orange-400">ficou mais Leve!</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Planos inteligentes que cabem no bolso. Rede própria de excelência e atendimento humanizado para você e sua família.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm font-medium text-white">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                  <MapPin className="w-5 h-5 text-green-400" /> Rede Própria Exclusiva
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                  <Check className="w-5 h-5 text-green-400" /> Preço Acessível
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                  <Check className="w-5 h-5 text-green-400" /> Telemedicina 24h
                </div>
              </div>
              <p className="text-[10px] text-purple-200 mt-4 opacity-80">*Consulte condições contratuais para a promoção de redução de carências.</p>
            </div>

            <div className="lg:w-1/2 w-full max-w-md mx-auto lg:ml-auto" id="simulacao">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="py-12 bg-white border-b border-gray-100 shadow-sm relative z-20 -mt-4 md:mt-0 rounded-t-3xl md:rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center group cursor-default hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-leve-orange group-hover:text-white transition-colors">
                  <stat.icon className="w-8 h-8 text-leve-orange group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl font-heading font-bold text-leve-purple">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade de Planos com 3 Faixas Etárias */}
      <section id="planos" className="py-20 bg-gray-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-leve-purple mb-4">
              Escolha o plano ideal
            </h2>
            <p className="text-gray-600 mb-8">
              Opções flexíveis para você, sua família ou sua empresa.
            </p>

            <div className="flex flex-col items-center gap-4">
              {/* Alternância PME vs Individual */}
              <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-gray-200 relative">
                <button 
                  onClick={() => setIsPME(false)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 z-10 ${!isPME ? 'bg-leve-purple text-white shadow-sm' : 'text-gray-500 hover:text-leve-purple'}`}
                >
                  Para Você/Família
                </button>
                <button 
                  onClick={() => setIsPME(true)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 z-10 ${isPME ? 'bg-leve-purple text-white shadow-sm' : 'text-gray-500 hover:text-leve-purple'}`}
                >
                  Para Empresa (CNPJ)
                </button>
              </div>

              {/* Alternância Coparticipação */}
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                <span className={`text-sm font-medium ${!withCopay ? 'text-leve-orange font-bold' : 'text-gray-500'}`}>Sem Coparticipação</span>
                <button 
                  onClick={() => setWithCopay(!withCopay)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${withCopay ? 'bg-leve-purple' : 'bg-gray-300'}`}
                >
                  <span
                    className={`${
                      withCopay ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </button>
                <span className={`text-sm font-medium ${withCopay ? 'text-leve-purple font-bold' : 'text-gray-500'}`}>Com Coparticipação</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative rounded-2xl border-2 flex flex-col ${plan.highlight ? 'border-leve-orange shadow-xl scale-105 z-10 ring-4 ring-orange-50' : 'border-gray-200 shadow-lg'} ${plan.color} transition-all duration-300 hover:shadow-2xl`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-leve-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> Popular
                  </div>
                )}
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-leve-purple mb-2">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mb-4 min-h-[2.5rem]">{plan.audience}</p>
                  
                  {/* Tabela de Preços para 3 Faixas Etárias */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    {getPrices(plan).map((priceItem, idx) => (
                      <div key={idx} className={`flex justify-between items-center py-1 ${idx !== 2 ? 'border-b border-gray-200' : ''}`}>
                        <span className="text-xs text-gray-600 font-medium">{priceItem.label}:</span>
                        <div className="flex items-baseline">
                          <span className="text-xs text-leve-orange font-bold mr-0.5">R$</span>
                          <span className="text-base font-heading font-bold text-leve-orange">{priceItem.value}</span>
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
                    onClick={() => openWhatsAppPlan(plan.name)}
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg text-center font-bold transition transform active:scale-95 ${
                      plan.highlight 
                        ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-green-200' 
                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    <WhatsAppIcon className={`w-5 h-5 ${plan.highlight ? 'text-white' : 'text-green-700'}`} />
                    Cotar no WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Rede */}
      <section id="rede" className="py-16 bg-gray-50 border-b border-gray-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-leve-purple mb-4">
              Nossa Rede de Atendimento
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A união perfeita entre a nossa estrutura própria e os melhores parceiros credenciados.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 relative overflow-hidden transform hover:scale-[1.01] transition-all">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-leve-orange to-leve-lightOrange"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-orange-100 text-leve-orange rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-leve-purple">Leve Clínicas</h3>
                     <p className="text-sm text-gray-500">Atendimento padrão ouro em 12 unidades</p>
                  </div>
                </div>
                <div className="bg-orange-50 text-leve-orange px-4 py-2 rounded-lg text-sm font-semibold">
                   Exclusividade Leve Saúde
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {OWN_CLINICS.map((clinic, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                    <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-leve-orange"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{clinic.name}</h4>
                      <p className="text-xs text-gray-500">{clinic.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-leve-purple to-leve-lightPurple"></div>
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-purple-100 text-leve-purple rounded-lg flex items-center justify-center">
                    <Hospital className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-leve-purple">Hospitais</h3>
                     <p className="text-sm text-gray-500">Parceiros de confiança perto de você</p>
                  </div>
               </div>
               <div className="columns-1 lg:columns-2 gap-8 space-y-8">
                 {NETWORK_PARTNERS.hospitals.map((group, idx) => (
                   <div key={idx} className="break-inside-avoid bg-gray-50 p-6 rounded-xl border border-gray-100">
                     <h4 className="text-leve-orange font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-200 pb-2">
                       {group.region}
                     </h4>
                     <ul className="space-y-2">
                       {group.list.map((hospital, hIdx) => (
                         <li key={hIdx} className="flex items-center gap-2 text-sm text-gray-600">
                           <div className="w-1.5 h-1.5 rounded-full bg-leve-purple flex-shrink-0"></div>
                           {hospital}
                         </li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                   <Microscope className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-leve-purple">Laboratórios</h3>
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

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-leve-purple mb-4">
              Benefícios Exclusivos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Muito além de consultas e exames. Um ecossistema completo de saúde.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="group text-center">
                <div className="w-20 h-20 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-leve-purple group-hover:text-white transition-all duration-300 transform group-hover:rotate-3">
                  <benefit.icon className="w-10 h-10 text-leve-purple group-hover:text-white mx-auto" />
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

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-heading font-bold text-center text-leve-purple mb-10">Perguntas Frequentes</h2>
           <div className="space-y-4">
             {FAQ_ITEMS.map((item, index) => (
               <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                 <button 
                   onClick={() => toggleFaq(index)}
                   className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition"
                 >
                   <span className="font-semibold text-gray-800">{item.question}</span>
                   {openFaqIndex === index ? <Minus className="w-5 h-5 text-leve-orange" /> : <Plus className="w-5 h-5 text-gray-400" />}
                 </button>
                 {openFaqIndex === index && (
                   <div className="p-4 bg-gray-50 text-gray-600 text-sm border-t border-gray-100 leading-relaxed">
                     {item.answer}
                   </div>
                 )}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="bg-leve-purple py-16 text-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Pronto para viver mais Leve?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Fale agora com um consultor especialista da Vortex e encontre o plano perfeito para você.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noreferrer"
              onClick={handleFooterWhatsAppClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition transform hover:-translate-y-1 shadow-lg gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
              Falar no WhatsApp
            </a>
            <button 
              onClick={() => document.getElementById('simulacao')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-leve-purple font-bold rounded-lg hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <a href="#home" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="inline-block mb-6 cursor-pointer">
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
                  <Phone className="w-5 h-5 text-leve-orange mt-1" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider mb-1">Telefone</span>
                    <a href="tel:2137987776" className="text-lg font-medium hover:text-leve-orange transition">(21) 3798-7776</a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400 hover:text-white transition">
                  <MapPin className="w-5 h-5 text-leve-orange mt-1" />
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
                <a href="https://www.instagram.com/vortexplanosdesaude" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-leve-orange hover:text-white transition-all duration-300">
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
    </div>
  );
};

export default App;
