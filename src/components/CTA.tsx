import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/90" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Quer aumentar as suas{" "}
            <span className="text-primary">vendas</span>{" "}
            com tráfego pago?
          </h2>
          
          <p className="text-xl lg:text-2xl mb-10 text-white/90 leading-relaxed">
            Estamos prontos para ajudar. Agende uma consultoria gratuita e descubra 
            como podemos transformar o seu negócio.
          </p>

          {/* Benefits List */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-semibold mb-1">Análise Gratuita</div>
                <div className="text-sm text-white/80">Auditoria completa das suas campanhas atuais</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-semibold mb-1">Estratégia Personalizada</div>
                <div className="text-sm text-white/80">Plano customizado para o seu negócio</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-semibold mb-1">Sem Compromisso</div>
                <div className="text-sm text-white/80">Consultoria 100% gratuita e sem obrigações</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 font-semibold px-8 py-4 text-lg group transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Agende uma Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Ligar Agora
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-sm text-white/70 mt-8">
            Resposta em menos de 24 horas • Consultoria sem custo • Resultados garantidos
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;