import { Users, TrendingUp, Eye, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Results = () => {
  const benefits = [
    {
      icon: Users,
      title: "Mais Leads",
      description: "Aumente a captação de leads qualificados através de campanhas otimizadas e segmentação precisa."
    },
    {
      icon: TrendingUp,
      title: "Mais Vendas",
      description: "Transforme mais visitantes em clientes com estratégias focadas em conversão e ROI."
    },
    {
      icon: Eye,
      title: "Mais Visibilidade",
      description: "Destaque-se da concorrência e chegue ao seu público-alvo no momento certo."
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
              Focamo-nos em métricas que realmente importam para o crescimento sustentável do seu negócio: mais conversões, mais clientes e mais impacto.
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

          {/* Testimonials Coming Soon */}
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
              O que os nossos clientes dizem
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Brevemente vamos partilhar aqui testemunhos reais dos nossos clientes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;