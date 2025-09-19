import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 fade-in">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Especialistas em Tráfego Pago</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight fade-in-up">
            Transforme cliques em{" "}
            <span className="text-secondary">clientes</span> com tráfego pago estratégico
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: "0.2s" }}>
            Na ClearPath Digital ajudamos o seu negócio a crescer com campanhas de Google Ads e Meta Ads
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button className="btn-hero text-lg px-8 py-4 group">
              Agende uma Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-outline-hero text-lg">
              Ver Nossos Resultados
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80 fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm">Google Ads Certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm">Meta Business Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm">+100 Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;