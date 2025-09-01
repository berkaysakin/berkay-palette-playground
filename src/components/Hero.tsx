import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/berkay-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                👋 Merhaba, Ben Berkay
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Dijital Dünyada
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  İnovatif Çözümler
                </span>
                Geliştiriyorum
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Profesyonel bir yazılım geliştirici ve dijital uzman olarak, modern teknolojilerle 
                iş dünyasına değer katan projeler üretiyorum. Kullanıcı deneyimini ön planda tutan, 
                ölçeklenebilir ve sürdürülebilir çözümler geliştirmeyi hedefliyorum.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 max-w-md">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-foreground">3+</div>
                  <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Memnuniyet</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary border-0 text-lg px-8 py-6">
                Projelerimi İncele
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Benimle İletişime Geç
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hover animate-float">
                <img
                  src={heroImage}
                  alt="Berkay - Dijital Uzman"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-full opacity-30 animate-float"></div>
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