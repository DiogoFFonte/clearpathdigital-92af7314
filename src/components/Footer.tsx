import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [{
      name: "Google Ads",
      href: "#servicos"
    }, {
      name: "Meta Ads",
      href: "#servicos"
    }, {
      name: "Landing Pages",
      href: "#servicos"
    }, {
      name: "Consultoria",
      href: "#contacto"
    }],
    company: [{
      name: "Sobre Nós",
      href: "#sobre"
    }, {
      name: "Serviços",
      href: "#servicos"
    }, {
      name: "Contacto",
      href: "#contacto"
    }, {
      name: "Blog",
      href: "#"
    }],
    legal: [{
      name: "Política de Privacidade",
      href: "#"
    }, {
      name: "Termos de Serviço",
      href: "#"
    }, {
      name: "Cookies",
      href: "#"
    }]
  };
  const socialLinks = [{
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/clear_pathdigital/"
  }, {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/company/clearpathdigital"
  }];
  return <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="ClearPath Digital Logo" className="h-12 w-auto mb-4 brightness-0 invert filter" />
              <p className="text-white/80 leading-relaxed">
                Especialistas em tráfego pago. Transformamos cliques em clientes 
                através de campanhas estratégicas e otimizadas.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:contato@clearpathdigital.pt" className="text-white/80 hover:text-white transition-colors text-sm">geral@clearpathdigital.pt</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+351912345678" className="text-white/80 hover:text-white transition-colors text-sm">
                  +351 912 345 678
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Siga-nos</h4>
            <p className="text-white/80 text-sm mb-6">
              Fique atualizado com as últimas tendências em marketing digital.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map(social => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>

            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="text-xs text-white/60">Certificações:</div>
              <div className="flex flex-col gap-1">
                <div className="text-xs text-white/80">✓ Google Ads Certified</div>
                <div className="text-xs text-white/80">✓ Meta Business Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} ClearPath Digital. Todos os direitos reservados.
            </div>
            
            <div className="flex gap-6">
              {footerLinks.legal.map(link => <a key={link.name} href={link.href} className="text-white/60 hover:text-white/80 transition-colors text-sm">
                  {link.name}
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;