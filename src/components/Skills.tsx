import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Geliştirme",
      description: "Modern web teknolojileriyle hızlı, güvenli ve ölçeklenebilir web uygulamaları geliştiriyorum.",
      skills: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobil Uygulama",
      description: "Kullanıcı dostu ve performanslı mobil uygulamalar tasarlayıp geliştiriyorum.",
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Dijital Pazarlama",
      description: "Markaların dijital varlığını güçlendiren stratejiler geliştiriyor ve uyguluyorum.",
      skills: ["SEO", "SEM", "Analytics", "Content Strategy", "Social Media"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performans Optimizasyonu",
      description: "Web sitelerinin ve uygulamaların hızını artırarak kullanıcı deneyimini iyileştiriyorum.",
      skills: ["Core Web Vitals", "Lighthouse", "CDN", "Caching", "Bundle Optimization"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Proje Yönetimi",
      description: "Ekip lideri olarak projeleri zamanında ve kaliteli bir şekilde teslim ediyorum.",
      skills: ["Agile", "Scrum", "Team Leadership", "Communication", "Planning"]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "İnovasyon & Strateji",
      description: "Gelişen teknolojileri takip ederek yenilikçi çözümler ve stratejiler geliştiriyorum.",
      skills: ["AI Integration", "Automation", "Strategy", "Innovation", "Consulting"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Uzmanlık Alanlarım
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Geniş bir teknoloji yelpazesinde deneyime sahipim ve sürekli kendimi geliştirerek
            en güncel teknolojilerle projeler gerçekleştiriyorum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground mr-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
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
    </section>
  );
};

export default Skills;