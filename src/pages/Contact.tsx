import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Burada form gönderme işlemi yapılacak
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "E-posta",
      value: "berkay@example.com",
      description: "Sorularınız için"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefon",
      value: "+90 555 123 45 67",
      description: "Pazartesi - Cuma, 09:00-18:00"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Konum",
      value: "İstanbul, Türkiye",
      description: "Online & Yüz yüze görüşme"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="text-sm bg-white font-medium mb-4">
              📞 İletişim
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Benimle İletişime Geçin
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Eğitim danışmanlığı, girişimcilik mentorluğu veya kişisel gelişim konularında 
              sorularınız varsa, benimle iletişime geçmekten çekinmeyin.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-black mb-4">
                    İletişim Bilgileri
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Size en uygun yöntemle ulaşabilirsiniz. Genellikle 24 saat içinde geri dönüş yapıyorum.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border border-gray-200 hover:shadow-card transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-black">{info.title}</h3>
                            <p className="text-black font-medium">{info.value}</p>
                            <p className="text-sm text-gray-600">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Response Time */}
                <Card className="border border-primary/20 bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-black">Hızlı Yanıt</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Mesajlarınıza genellikle 24 saat içinde, acil durumlar için aynı gün yanıt veriyorum.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border border-gray-200 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading font-bold text-black flex items-center gap-2">
                      <MessageCircle className="h-6 w-6" />
                      Mesaj Gönder
                    </CardTitle>
                    <p className="text-gray-600">
                      Aşağıdaki formu doldurarak doğrudan benimle iletişime geçebilirsiniz.
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-black flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Adınız *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Adınızı girin"
                            className="border-gray-300 focus:border-primary focus:ring-primary/20"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-black flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            E-posta *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="E-posta adresinizi girin"
                            className="border-gray-300 focus:border-primary focus:ring-primary/20"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-black">
                          Konu *
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Mesajınızın konusunu girin"
                          className="border-gray-300 focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-black">
                          Mesajınız *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Mesajınızı detaylı bir şekilde yazın..."
                          rows={6}
                          className="border-gray-300 focus:border-primary focus:ring-primary/20 resize-none"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-primary border-0 text-lg py-6 flex items-center gap-2 hover:shadow-hover transition-all"
                      >
                        <Send className="h-5 w-5" />
                        Mesaj Gönder
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;