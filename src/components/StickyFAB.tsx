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
      {/* Call Button - Primary (Dark Blue) */}
      <Button
        onClick={handleCallClick}
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-4 py-3 rounded-full"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm font-medium whitespace-nowrap">Ligar Agora</span>
      </Button>

      {/* Contact Button - Green with explicit styling */}
      <Button
        onClick={handleContactClick}
        className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-4 py-3 rounded-full"
        style={{ backgroundColor: 'hsl(145 63% 49%)', color: 'white' }}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium whitespace-nowrap">Fale Connosco</span>
      </Button>

      {/* Phone number always visible */}
      <div className="bg-white/95 backdrop-blur-sm text-primary px-3 py-2 rounded-full text-xs font-medium text-center shadow-md border border-gray-200">
        +351 927 959 290
      </div>
    </div>
  );
};

export default StickyFAB;