import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-4 pb-4">
      <footer className="bg-primary text-primary-foreground rounded-2xl">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold">Berkay</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Eğitim danışmanlığı ve girişimcilik alanında deneyimli, 
                kişisel gelişim odaklı çözümler sunan uzman.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={scrollToTop}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    İletişim
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">İletişim</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>berkaysakin500@gmail.com</p>
                <p>+49 172 785 2004</p>
                <p>Deutschland</p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://www.instagram.com/sakin.berkayy" 
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/berkaysakin" 
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:berkaysakin500@gmail.com" 
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  title="E-posta gönder"
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
              <div className="flex items-center gap-4">
                <p className="text-primary-foreground/60 text-sm flex items-center">
                  Made with Berkay Sakin in Turkey
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;