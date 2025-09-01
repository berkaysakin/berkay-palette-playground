import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Berkay</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Dijital dünyada yenilikçi çözümler üreten, teknoloji tutkunu 
              bir geliştirici. Projelerinizi hayata geçirmek için buradayım.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Yeteneklerim
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hizmetlerim
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">İletişim</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>berkay@example.com</p>
              <p>+90 555 123 45 67</p>
              <p>İstanbul, Türkiye</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Berkay. Tüm hakları saklıdır.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" fill="currentColor" /> in Turkey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;