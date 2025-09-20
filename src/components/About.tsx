import { Shield, Target, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparência",
      description: "Acreditamos que a confiança é construída com clareza total no que fazemos."
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Focamos em métricas que realmente importam: conversões, vendas e ROI positivo."
    },
    {
      icon: TrendingUp,
      title: "Estratégia",
      description: "Campanhas baseadas em dados, otimização contínua e melhores práticas do mercado."
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Sobre Nós
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Somos especialistas em tráfego pago. O nosso foco é gerar resultados reais 
              através de campanhas estratégicas, transparentes e otimizadas.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-xs lg:text-sm font-semibold text-white mb-1">Transparência</div>
                <div className="text-xs lg:text-sm text-white/80">Relatórios claros e acompanhamento contínuo do desempenho das campanhas</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-secondary mb-2">Sob Medida</div>
                <div className="text-xs lg:text-sm font-semibold text-white mb-1">Campanhas</div>
                <div className="text-xs lg:text-sm text-white/80">Estratégias personalizadas de acordo com o objetivo e setor de cada cliente</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-secondary mb-2">Resultados</div>
                <div className="text-xs lg:text-sm font-semibold text-white mb-1">Foco em</div>
                <div className="text-xs lg:text-sm text-white/80">Orientação para conversões, ROI positivo e crescimento real do negócio</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-secondary mb-2">Contínua</div>
                <div className="text-xs lg:text-sm font-semibold text-white mb-1">Otimização</div>
                <div className="text-xs lg:text-sm text-white/80">Campanhas ajustadas com base em dados para máxima performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;