import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

export const trackAndOpenWhatsApp = (location: string) => {
  const win = window as any;
  // Blindagem do Rastreamento: Dispara 'Contact' no clique do WhatsApp
  if (win.fbq) {
    win.fbq('track', 'Contact', {
      content_name: location,
      content_category: 'WhatsApp Click'
    });
  } else {
    console.log(`FB Pixel Track: Contact (Mocked) - ${location}`);
  }
  
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
};