import { Search, Share2, MousePointer, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Google Ads",
      description: "Campanhas de pesquisa, display e remarketing otimizadas para máximo ROI.",
      features: [
        "Campanhas de Pesquisa",
        "Google Display Network",
        "Remarketing Estratégico",
        "Google Shopping",
        "Otimização Contínua"
      ]
    },
    {
      icon: Share2,
      title: "Meta Ads",
      description: "Campanhas para Facebook e Instagram focadas em captação de leads e vendas.",
      features: [
        "Facebook Ads",
        "Instagram Ads",
        "Remarketing Avançado",
        "Lookalike Audiences",
        "Creative Testing"
      ]
    },
    {
      icon: MousePointer,
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão que transformam visitantes em clientes.",
      features: [
        "Design Responsivo",
        "Otimização CRO",
        "A/B Testing",
        "Integração Analytics",
        "Performance Tracking"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Nossos Serviços
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Oferecemos soluções completas em tráfego pago para acelerar o crescimento do seu negócio
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Saber Mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Precisa de uma solução personalizada?
            </p>
            <Button className="btn-hero text-lg">
              Fale Connosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;