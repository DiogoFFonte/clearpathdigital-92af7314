import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyFAB = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+351927959290";
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button with always visible label */}
      <Button
        onClick={handleCallClick}
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-4 py-3 rounded-full"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm font-medium whitespace-nowrap">Ligar Agora</span>
      </Button>

      {/* Contact Button with always visible label */}
      <Button
        onClick={handleContactClick}
        className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-4 py-3 rounded-full"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium whitespace-nowrap">Fale Connosco</span>
      </Button>

      {/* Phone number always visible */}
      <div className="bg-muted/95 backdrop-blur-sm text-foreground px-3 py-2 rounded-full text-xs font-medium text-center shadow-md">
        +351 927 959 290
      </div>
    </div>
  );
};

export default StickyFAB;