import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Target, Lightbulb, Heart } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: <CheckCircle className="h-5 w-5" />, text: "50+ Başarılı Proje" },
    { icon: <Award className="h-5 w-5" />, text: "Sektör Deneyimi" },
    { icon: <Users className="h-5 w-5" />, text: "Mutlu Müşteriler" },
    { icon: <Target className="h-5 w-5" />, text: "Zamanında Teslimat" }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "İnovasyon",
      description: "En güncel teknolojileri takip ederek yenilikçi çözümler üretiyorum."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Kalite",
      description: "Her projede mükemmellik arayışı ile en yüksek kaliteyi hedefliyorum."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "İşbirliği",
      description: "Müşterilerle yakın işbirliği içinde hedefe odaklı çalışıyorum."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Sonuç",
      description: "Belirlenen hedeflere ulaşmak için kararlı ve disiplinli çalışıyorum."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                👨‍💻 Hakkımda
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Dijital Çözümlerle
                <span className="block text-primary">
                  Değer Yaratıyorum
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Merhaba! Ben Berkay, tutkulu bir yazılım geliştirici ve dijital stratejistidir. 
                3+ yıldır web teknolojileri alanında çalışıyor, şirketlerin dijital dönüşüm 
                süreçlerinde rehberlik ediyorum.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Modern web teknolojileri, kullanıcı deneyimi tasarımı ve performans optimizasyonu 
                konularında uzmanlaşmış durumdayım. Her projede müşteri memnuniyetini ön planda 
                tutarak, ölçeklenebilir ve sürdürülebilir çözümler geliştirmeyi hedefliyorum.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <div className="text-primary">
                    {achievement.icon}
                  </div>
                  <span className="text-foreground font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary border-0">
                Projelerimi İncele
              </Button>
              <Button variant="outline" size="lg">
                CV'mi İndir
              </Button>
            </div>
          </div>

          {/* Values & Mission */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Değerlerim
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <Card 
                    key={index}
                    className="group hover:shadow-hover transition-all duration-300 border-border/50"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground mx-auto mb-3 w-fit group-hover:scale-110 transition-transform">
                        {value.icon}
                      </div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-dark text-primary-foreground border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">
                  Misyonum
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Teknolojinin gücünü kullanarak işletmelerin dijital potansiyelini 
                  ortaya çıkarmak ve kullanıcıların hayatını kolaylaştıran çözümler 
                  geliştirmek.
                </p>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <div className="bg-card rounded-lg p-6 border border-border/50">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                İlginç Bilgiler
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>☕ Günde 4+ fincan kahve içerim</li>
                <li>🌙 En produktif çalışma saatim gece 22:00-02:00</li>
                <li>📚 Sürekli yeni teknolojiler öğrenmeyi severim</li>
                <li>🎮 Boş zamanlarımda oyun geliştirme ile ilgilenirim</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;