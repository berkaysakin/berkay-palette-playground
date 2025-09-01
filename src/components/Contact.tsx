import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-posta",
      content: "berkay@example.com",
      href: "mailto:berkay@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      content: "+90 555 123 45 67",
      href: "tel:+905551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Lokasyon",
      content: "İstanbul, Türkiye",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            İletişime Geçin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projeleriniz hakkında konuşmak, sorularınızı yanıtlamak veya 
            işbirliği fırsatlarını değerlendirmek için benimle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Mesaj Gönderin
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Adınız
                    </label>
                    <Input 
                      placeholder="Adınızı girin"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-posta
                    </label>
                    <Input 
                      type="email"
                      placeholder="E-posta adresinizi girin"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Konu
                  </label>
                  <Input 
                    placeholder="Mesajınızın konusunu girin"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mesajınız
                  </label>
                  <Textarea 
                    placeholder="Mesajınızı buraya yazın..."
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary border-0 group"
                >
                  Mesaj Gönder
                  <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Bana Ulaşın
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Size en hızlı şekilde geri dönüş yapabilmem için aşağıdaki 
                iletişim bilgilerini kullanabilirsiniz. Her türlü proje, 
                işbirliği ve danışmanlık talepleriniz için buradayım.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 border-border/50"
                >
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group-hover:text-primary transition-colors"
                    >
                      <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-primary text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-heading font-semibold text-lg mb-2">
                  Hızlı Yanıt Garantisi
                </h4>
                <p className="text-primary-foreground/90">
                  Tüm mesajlarınıza 24 saat içinde geri dönüş yapıyorum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;