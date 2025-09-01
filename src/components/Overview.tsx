import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Code, Smartphone, Globe, Zap, Users, Lightbulb, CheckCircle, Award, Target, Heart } from "lucide-react";

const Overview = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Geliştirme 💻",
      skills: ["React", "TypeScript", "Node.js", "Next.js"]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobil Uygulama 📱",
      skills: ["React Native", "Flutter", "PWA"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Dijital Pazarlama 📈",
      skills: ["SEO", "Analytics", "Strategy"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performans ⚡",
      skills: ["Optimization", "Core Web Vitals"]
    }
  ];

  const services = [
    {
      title: "Web Sitesi Geliştirme 🌐",
      description: "Kurumsal web siteleri ve e-ticaret platformları",
      features: [
        "Responsive tasarım",
        "SEO optimizasyonu", 
        "Hızlı yükleme",
        "Admin paneli"
      ],
      price: "Proje bazlı",
      highlighted: false
    },
    {
      title: "Web Uygulaması ⚙️",
      description: "Özel yazılım ve SaaS çözümleri",
      features: [
        "Kullanıcı yönetimi",
        "API entegrasyonları",
        "Gerçek zamanlı güncellemeler",
        "Veri analizi",
        "Güvenlik önlemleri"
      ],
      price: "Proje bazlı",
      highlighted: true
    },
    {
      title: "Dijital Danışmanlık 💡",
      description: "Strateji geliştirme ve teknik rehberlik",
      features: [
        "Teknoloji danışmanlığı",
        "Dijital strateji",
        "Performans analizi",
        "Eğitim ve mentorluk"
      ],
      price: "Saatlik",
      highlighted: false
    }
  ];

  const achievements = [
    { icon: <CheckCircle className="h-5 w-5" />, text: "50+ Başarılı Proje 🎯" },
    { icon: <Award className="h-5 w-5" />, text: "3+ Yıl Deneyim 📅" },
    { icon: <Users className="h-5 w-5" />, text: "Mutlu Müşteriler 😊" },
    { icon: <Target className="h-5 w-5" />, text: "Zamanında Teslimat ⏰" }
  ];

  const blogPosts = [
    {
      title: "Modern Web Geliştirme Trendleri 2024 🔥",
      excerpt: "2024 yılında web geliştirme dünyasında öne çıkan teknolojiler ve best practice'ler.",
      date: "15 Mart 2024",
      readTime: "8 dakika",
      category: "Web Development"
    },
    {
      title: "TypeScript ile Daha Güvenli Kod 🛡️",
      excerpt: "TypeScript'in sunduğu type safety özelliklerini kullanarak daha güvenilir projeler geliştirme.",
      date: "08 Mart 2024", 
      readTime: "12 dakika",
      category: "Programming"
    },
    {
      title: "React Performance Optimizasyon Rehberi ⚡",
      excerpt: "React uygulamalarının performansını artırmak için kullanabileceğiniz teknikler.",
      date: "01 Mart 2024",
      readTime: "15 dakika", 
      category: "React"
    }
  ];

  return (
    <section id="overview" className="py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Summary */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="text-sm font-medium mb-4">
              👨‍💻 Hakkımda & Yeteneklerim
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Dijital Çözümlerle Değer Yaratıyorum
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              3+ yıldır web teknolojileri alanında çalışan tutkulu bir yazılım geliştirici. 
              Modern teknolojilerle kurumsal projelerde kaliteli sonuçlar üretiyorum. ☕
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-sm bg-card rounded-lg p-4 border border-border/50">
                <div className="text-primary">
                  {achievement.icon}
                </div>
                <span className="text-foreground font-medium text-center">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 text-center">
            Uzmanlık Alanlarım 🎯
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 border-border/50"
              >
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground mr-3 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 text-center">
            Hizmetlerim 🛠️
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-hover transition-all duration-300 ${
                  service.highlighted 
                    ? 'border-primary shadow-card' 
                    : 'border-border/50'
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Popüler ⭐
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-lg font-heading font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-3 border-t border-border">
                    <div className="text-center mb-3">
                      <span className="text-lg font-heading font-bold text-foreground">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mb-8">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 text-center">
            Son Blog Yazıları 📝
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group hover:shadow-hover transition-all duration-300 border-border/50"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-base font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            Projeleriniz için profesyonel çözümler arıyorsanız, hemen iletişime geçelim! 🤝
          </p>
          <Button size="lg" className="bg-gradient-primary border-0">
            Hemen İletişime Geç 📞
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Overview;