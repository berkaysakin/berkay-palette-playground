import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-posta 📧",
      content: "berkay.sahin@example.com",
      href: "mailto:berkay.sahin@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon 📱",
      content: "+90 555 123 45 67",
      href: "tel:+905551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Lokasyon 📍",
      content: "İstanbul, Türkiye",
      href: "#"
    }
  ];

  const socialMedia = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      href: "https://github.com/berkay",
      handle: "@berkay"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn", 
      href: "https://linkedin.com/in/berkay",
      handle: "/in/berkay"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      href: "https://instagram.com/berkay",
      handle: "@berkay"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      href: "https://twitter.com/berkay", 
      handle: "@berkay"
    }
  ];

  return (
    <section id="contact" className="py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            İletişime Geçin 📞
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projeleriniz için işbirliği yapmak veya danışmanlık almak istiyorsanız, 
            hemen iletişime geçelim! 🤝
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                İletişim Bilgileri 📋
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Projeleriniz hakkında konuşmak için aşağıdaki kanallardan bana ulaşabilirsiniz.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 border-border/50"
                >
                  <CardContent className="p-4">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-3 group-hover:text-primary transition-colors"
                    >
                      <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors text-sm">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Sosyal Medya 🌐
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Güncel projelerimi ve paylaşımlarımı takip edebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialMedia.map((social, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 border-border/50"
                >
                  <CardContent className="p-4 text-center">
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center space-y-2 group-hover:text-primary transition-colors"
                    >
                      <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                          {social.name}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors text-xs">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        
        <div className="mt-8">
          <Card className="bg-gradient-primary text-primary-foreground border-0">
            <CardContent className="p-6 text-center">
              <h4 className="font-heading font-semibold text-lg mb-2">
                Hızlı Yanıt Garantisi ⚡
              </h4>
              <p className="text-primary-foreground/90">
                Tüm mesajlarınıza 24 saat içinde geri dönüş yapıyorum! 📩
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;