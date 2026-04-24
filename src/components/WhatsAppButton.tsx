import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "916301846700";
  const message = "Hi, I'm interested in MNS Success Martial Arts Academy.";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const encoded = encodeURIComponent(message);
    // Detect mobile to use the native app deep link, otherwise use web
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encoded}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`;
    // Fallback to api.whatsapp.com if needed
    const fallback = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`;
    const win = window.open(url, "_blank");
    if (!win) {
      window.location.href = fallback;
    }
  };

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/60 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
