import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                🎓 Eğitim Danışmanı & Girişimci
              </Badge>
              <h1 className="text-4xl pt-3 sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Sürekli Öğrenme
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Sürekli Gelişim
                </span>
              </h1>
              <p className="text-lg pt-5 pb-5 text-muted-foreground leading-relaxed max-w-lg">
                İnsanlara ilham veren eğitim çözümleri ve girişimcilik vizyonumla, öğrenme sürecini daha verimli, ulaşılabilir ve geleceğe odaklı hale getiriyorum
              </p>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pb-2">
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 text-lg px-8 py-6"
                onClick={scrollToCTA}
              >
                Kitabımı Keşfet
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={scrollToBottom}
              >
                İletişime Geç
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="https://www.instagram.com/berkaysakinn" className="text-muted-foreground hover:text-primary transition-colors" title="Instagram profilim">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/berkaysakin" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn profilim">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:berkaysakin500@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1" title="E-posta gönder: berkaysakin500@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hover animate-float">
                <img
                  src="/assets/images/brkyskn.jpg"
                  alt="Berkay - Eğitim Danışmanı"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
