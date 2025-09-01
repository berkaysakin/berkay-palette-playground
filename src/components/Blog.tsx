import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Modern Web Geliştirme Trendleri 2024",
      excerpt: "2024 yılında web geliştirme dünyasında öne çıkan teknolojiler, frameworkler ve best practice'ler hakkında detaylı bir inceleme.",
      content: "Web geliştirme dünyası sürekli evrim geçiriyor. 2024 yılında dikkat çeken başlıca trendler arasında AI destekli geliştirme araçları, serverless mimariler ve headless CMS çözümleri yer alıyor...",
      date: "15 Mart 2024",
      readTime: "8 dakika",
      category: "Web Development",
      featured: true
    },
    {
      id: 2,
      title: "TypeScript ile Daha Güvenli Kod Yazma",
      excerpt: "TypeScript'in sunduğu type safety özelliklerini kullanarak daha güvenilir ve bakımı kolay projeler geliştirme teknikleri.",
      content: "TypeScript, JavaScript'e statik tip kontrolü getirerek kod kalitesini artırır. Bu yazıda TypeScript'in temel özelliklerinden advanced tiplerden kullanımına kadar...",
      date: "08 Mart 2024",
      readTime: "12 dakika",
      category: "Programming",
      featured: false
    },
    {
      id: 3,
      title: "React Performance Optimizasyon Rehberi",
      excerpt: "React uygulamalarının performansını artırmak için kullanabileceğiniz teknikler, araçlar ve best practice'ler.",
      content: "React uygulamalarında performans optimizasyonu kritik bir konudur. Memo, useMemo, useCallback gibi hook'ların doğru kullanımından bundle optimizasyonuna kadar...",
      date: "01 Mart 2024",
      readTime: "15 dakika",
      category: "React",
      featured: false
    },
    {
      id: 4,
      title: "AI ve Web Geliştirme: Geleceğe Bakış",
      excerpt: "Yapay zeka teknolojilerinin web geliştirme süreçlerine entegrasyonu ve gelecekteki potansiyel etkiler.",
      content: "Yapay zeka, web geliştirme süreçlerini köklü şekilde değiştiriyor. Otomatik kod üretiminden kullanıcı deneyimi kişiselleştirmesine kadar...",
      date: "22 Şubat 2024",
      readTime: "10 dakika",
      category: "AI & Tech",
      featured: true
    },
    {
      id: 5,
      title: "Fullstack Development Roadmap 2024",
      excerpt: "2024 yılında fullstack developer olmak için öğrenmeniz gereken teknolojiler ve geliştirme yol haritası.",
      content: "Fullstack developer olmak için frontend ve backend teknolojilerini dengeli şekilde öğrenmek gerekir. Bu rehberde React, Node.js, veritabanları...",
      date: "18 Şubat 2024",
      readTime: "20 dakika",
      category: "Career",
      featured: false
    },
    {
      id: 6,
      title: "Responsive Design: Mobile-First Yaklaşım",
      excerpt: "Mobile-first tasarım yaklaşımıyla responsive web siteleri oluşturma teknikleri ve CSS Grid & Flexbox kullanımı.",
      content: "Mobile-first yaklaşım, modern web tasarımının temel taşlarından biridir. Bu yazıda CSS Grid, Flexbox ve media query'lerin etkin kullanımı...",
      date: "10 Şubat 2024",
      readTime: "14 dakika",
      category: "CSS & Design",
      featured: false
    }
  ];

  const categories = ["Tümü", "Web Development", "Programming", "React", "AI & Tech", "Career", "CSS & Design"];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Blog Yazıları
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web geliştirme, teknoloji trendleri ve programlama hakkında düşüncelerimi, 
            deneyimlerimi ve öğrendiklerimi paylaştığım yazılar.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-gradient-primary border-0" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
            Öne Çıkan Yazılar
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card 
                key={post.id}
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden"
              >
                <div className="h-48 bg-gradient-dark"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Devamını Oku
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
            Tüm Yazılar
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card 
                key={post.id}
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:text-primary">
                    Oku
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16">
          <Card className="bg-gradient-dark text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Blog Güncellemelerini Kaçırma!
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-md mx-auto">
                Yeni yazıları ve teknoloji güncellemelerini e-posta ile almak için abone ol.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground text-foreground border-0"
                />
                <Button variant="secondary" className="px-6">
                  Abone Ol
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;