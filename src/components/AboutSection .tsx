import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, BookOpen } from "lucide-react";

const AboutCards = () => {
  const cards = [
    {
      icon: <BookOpen className="h-6 w-6 text-black" />,
      title: "Vizyonum",
      description: "Eğitim ve gelişimle insanların potansiyelini açığa çıkarmak."
    },
    {
      icon: <Users className="h-6 w-6 text-black" />,
      title: "Deneyimim",
      description: "Bireyler ve kurumlar için 5+ yıl süren danışmanlık deneyimi."
    },
    {
      icon: <Target className="h-6 w-6 text-black" />,
      title: "Yaklaşımım",
      description: "Öğrenmeyi eğlenceli, ulaşılabilir ve etkili hale getirmek."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="outline" className="text-sm font-medium mb-4">
          Hakkımda
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-6">
          Eğitim ve Gelişim Yolculuğu
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto mb-12 leading-relaxed">
          İnsanlara ilham veren eğitim çözümleri ve girişimcilik vizyonumla, öğrenme sürecini daha verimli, ulaşılabilir ve geleceğe odaklı hale getiriyorum.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300"
            >
              <CardContent className="flex flex-col items-center">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm text-center">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
