import type { MouseEvent } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/916301846700?text=Hi%20I%20am%20interested%20in%20your%20services";

const WhatsAppButton = () => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    let openedWindow: Window | null = null;

    try {
      openedWindow = window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    } catch {
      openedWindow = null;
    }

    if (!openedWindow) {
      try {
        if (window.top && window.top !== window) {
          window.top.location.href = WHATSAPP_URL;
          return;
        }
      } catch {
        // Ignore iframe cross-origin restrictions and use same-window fallback.
      }

      window.location.href = WHATSAPP_URL;
    }
  };

  return (
    <a
      href={WHATSAPP_URL}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" />
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-md" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
