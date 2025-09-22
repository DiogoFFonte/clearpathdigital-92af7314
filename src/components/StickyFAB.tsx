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
      {/* Call Button */}
      <Button
        onClick={handleCallClick}
        size="lg"
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        title="Ligar Agora: +351 927 959 290"
      >
        <Phone className="w-6 h-6 text-white group-hover:animate-pulse" />
      </Button>

      {/* Contact Button */}
      <Button
        onClick={handleContactClick}
        size="lg"
        className="w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        title="Fale Connosco"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:animate-pulse" />
      </Button>

      {/* Phone Number Display - Shows on hover */}
      <div className="absolute right-16 top-0 bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        +351 927 959 290
      </div>
    </div>
  );
};

export default StickyFAB;