import { Users, TrendingUp, Eye, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Results = () => {
  const benefits = [
    {
      icon: Users,
      title: "Mais Leads",
      description: "Aumente a captação de leads qualificados através de campanhas otimizadas e segmentação precisa.",
      metric: "+150%",
      metricLabel: "Média de Aumento"
    },
    {
      icon: TrendingUp,
      title: "Mais Vendas",
      description: "Transforme mais visitantes em clientes com estratégias focadas em conversão e ROI.",
      metric: "+200%",
      metricLabel: "ROI Médio"
    },
    {
      icon: Eye,
      title: "Mais Visibilidade",
      description: "Destaque-se da concorrência e chegue ao seu público-alvo no momento certo.",
      metric: "+300%",
      metricLabel: "Alcance Médio"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Resultados que Transformam
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Os nossos clientes experimentam crescimento real e sustentável com as nossas estratégias comprovadas
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-muted/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Metric */}
                  <div className="mb-6">
                    <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">
                      {benefit.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {benefit.metricLabel}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial Placeholder */}
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-secondary fill-current" />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl text-primary mb-6 italic leading-relaxed">
              "A ClearPath Digital transformou completamente os nossos resultados online. 
              Em apenas 3 meses conseguimos triplicar o número de leads qualificados."
            </blockquote>
            <div className="text-muted-foreground">
              <div className="font-semibold">João Silva</div>
              <div className="text-sm">CEO, Empresa Exemplo</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Google</div>
              <div className="text-xs text-muted-foreground">Partner Certificado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Meta</div>
              <div className="text-xs text-muted-foreground">Business Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">5★</div>
              <div className="text-xs text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">100+</div>
              <div className="text-xs text-muted-foreground">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;