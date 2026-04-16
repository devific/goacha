export const WHATSAPP_NUMBER = "918262914023";
export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
export const IMAGEKIT_BASE_URL = "https://ik.imagekit.io/devific/goacha";
