import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contacto consigo em breve.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "geral@clearpathdigital.pt",
      link: "mailto:geral@clearpathdigital.pt"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+351 927 959 290",
      link: "tel:+351927959290"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Torres Novas, Portugal",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/clear_pathdigital/"
    }
  ];

  return (
    <section id="contacto" className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Contacto
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Pronto para começar? Entre em contacto connosco e vamos discutir como podemos ajudar o seu negócio a crescer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Envie-nos uma Mensagem
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="O seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="o.seu.email@exemplo.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[120px]"
                        placeholder="Conte-nos sobre o seu projeto e como podemos ajudar..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="btn-hero w-full group"
                    >
                      <Send className="mr-2 w-4 h-4" />
                      Enviar Pedido
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{info.title}</div>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-primary mb-4">Siga-nos nas Redes Sociais</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white hover:bg-secondary/90 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <Card className="border-0 bg-primary text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">Prefere falar connosco?</h4>
                  <p className="text-white/90 text-sm mb-4">
                    Ligue-nos diretamente para uma consulta imediata
                  </p>
                  <Button 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary w-full"
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    +351 927 959 290
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;