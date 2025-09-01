import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Sitesi Geliştirme",
      description: "Kurumsal web siteleri ve e-ticaret platformları",
      features: [
        "Responsive tasarım",
        "SEO optimizasyonu",
        "Hızlı yükleme",
        "Admin paneli",
        "Analytics entegrasyonu"
      ],
      price: "Proje bazlı",
      highlighted: false
    },
    {
      title: "Web Uygulaması",
      description: "Özel yazılım ve SaaS çözümleri",
      features: [
        "Kullanıcı yönetimi",
        "API entegrasyonları",
        "Gerçek zamanlı güncellemeler",
        "Veri analizi",
        "Güvenlik önlemleri",
        "Teknik destek"
      ],
      price: "Proje bazlı",
      highlighted: true
    },
    {
      title: "Dijital Danışmanlık",
      description: "Strateji geliştirme ve teknik rehberlik",
      features: [
        "Teknoloji danışmanlığı",
        "Dijital strateji",
        "Performans analizi",
        "Eğitim ve mentorluk",
        "Süreç optimizasyonu"
      ],
      price: "Saatlik",
      highlighted: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Hizmetlerim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İhtiyaçlarınıza özel, kaliteli ve profesyonel dijital çözümler sunuyorum.
            Her projede mükemmellik ve müşteri memnuniyetini hedefliyorum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 ${
                service.highlighted 
                  ? 'border-primary shadow-card scale-105' 
                  : 'border-border/50'
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Popüler
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-heading font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-heading font-bold text-foreground">
                      {service.price}
                    </span>
                  </div>
                  
                  <Button 
                    variant={service.highlighted ? "default" : "outline"}
                    className={`w-full group ${
                      service.highlighted 
                        ? 'bg-gradient-primary border-0' 
                        : ''
                    }`}
                  >
                    Detayları Gör
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Özel bir projeniz mi var? Birlikte konuşalım ve size en uygun çözümü bulalım.
          </p>
          <Button size="lg" className="bg-gradient-primary border-0">
            Ücretsiz Konsültasyon Al
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;