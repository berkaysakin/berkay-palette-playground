export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Şartlı Kabul Nedir? Nasıl Alınır? Almanya’da Şartlı Kabul Şartları",
    excerpt: "Eğitim hayatını yurtdışında sürdürmek isteyen öğrencilerin sıkça karşılaştığı kavramlardan biri de şartlı kabuldür.",
    content: `
    Şartlı Kabul Nedir?
Şartlı kabul, öğrencinin belirli şartları yerine getirmesi koşuluyla bir üniversiteye veya programa kabul edilmesi anlamına gelir. Genellikle dil yeterliliği veya eksik akademik belgelerin tamamlanması gibi durumlarda üniversiteler, öğrencilere şartlı kabul sunarak eksikliklerini gidermeleri için fırsat tanır.

Şartlı Kabul Nasıl Alınır?
Şartlı kabul almak için aşağıdaki adımları izleyebilirsiniz:

1. Üniversite ve Program Araştırması
Üniversiteleri Belirleyin: Almanya’da eğitim almak istediğiniz üniversiteleri ve programları seçin.
Gereklilikleri İnceleyin: Seçtiğiniz programların şartlarını ve başvuru tarihlerine dikkat edin.
2. Başvuru Belgelerinin Hazırlanması
Akademik Belgeler: Diploma, transkript ve varsa referans mektupları.
Dil Yeterlilik Belgesi: Almanca veya İngilizce dil sertifikaları (eğer mevcutsa).
Motivasyon Mektubu: Neden bu programı seçtiğinizi anlatan bir yazı.
3. Başvurunun Yapılması
Online Başvuru: Çoğu üniversite online başvuru kabul eder.
Başvuru Ücreti: Gerekli ise başvuru ücretini ödeyin.
Belgelerin Gönderilmesi: Tüm belgelerin eksiksiz ve doğru olduğundan emin olun.
4. Şartlı Kabul Mektubunun Alınması
Değerlendirme Süreci: Üniversite başvurunuzu değerlendirir ve eksikler varsa belirtir.
Şartlı Kabul Mektubu: Eksiklerin tamamlanması koşuluyla kabul edildiğinizi bildiren resmi belge.
5. Şartların Yerine Getirilmesi
Dil Kursları: Gerekli dil seviyesine ulaşmak için kurslara katılın.
Hazırlık Programları: Akademik eksikleri gidermek için hazırlık programlarına kaydolun.
6. Kesin Kayıt
Şartları Tamamlama: Belirtilen süre içinde tüm şartları yerine getirin.
Kayıt İşlemleri: Üniversitenin istediği belgeleri teslim ederek kaydınızı tamamlayın.
Almanya’da Şartlı Kabul Şartları
Almanya’da şartlı kabul alabilmek için genel olarak aşağıdaki şartları karşılamanız gerekmektedir:

Dil Yeterliliği
Almanca: Çoğu program için en az B1 seviyesinde Almanca dil sertifikası istenir.
İngilizce: İngilizce programlar için TOEFL veya IELTS skorları gereklidir.
Akademik Gereklilikler
Lise Diploması: Türkiye’de 12 yıllık eğitimi tamamlamış olmak.
Not Ortalaması: Bazı üniversiteler belirli bir not ortalaması talep edebilir.
Ek Belgeler
Motivasyon Mektubu: Neden Almanya’da eğitim almak istediğinizi açıklayan bir yazı.
Referans Mektupları: Öğretmenlerinizden veya profesörlerinizden alınmış tavsiye mektupları.
Şartlı Kabulün Avantajları
Zaman Kazanma: Eksiklerinizi tamamlarken üniversiteye kabul sürecini hızlandırır.
Dil Gelişimi: Dil yeterliliğinizi geliştirmek için ek süre tanır.
Akademik Hazırlık: Hazırlık programları ile akademik eksiklerinizi giderirsiniz.
Sonuç
Şartlı kabul, Almanya’da üniversite eğitimi almak isteyen öğrenciler için önemli bir fırsattır. Doğru adımları izleyerek ve gerekli şartları yerine getirerek siz de Almanya’da hayalinizdeki eğitimi alabilirsiniz. Unutmayın, iyi bir planlama ve hazırlık süreci başarıya giden yolda en önemli etkenlerdir.

Sıkça Sorulan Sorular
Almanya’da şartlı kabul nedir?
Şartlı kabul, Almanya’daki bir üniversiteye veya yükseköğretim programına başvuran öğrencilerin belirli şartları yerine getirmeleri koşuluyla kabul edildiklerini gösteren bir kabul türüdür. Bu şartlar genellikle dil yeterliliği, belirli derslerin tamamlanması veya bir hazırlık programına katılım gibi gereksinimleri içerir.

Şartlı kabul alabilmek için hangi şartları yerine getirmem gerekiyor?
Şartlı kabul için yerine getirmeniz gereken şartlar, başvurduğunuz üniversite ve programa bağlıdır. Genellikle Almanca veya İngilizce dil yeterliliğinin kanıtlanması, akademik yeterliliklerin tamamlanması veya Studienkolleg gibi bir hazırlık programına katılımı içerebilir.

Şartları belirtilen süre içinde yerine getiremezsem ne olur?
Şartları belirtilen süre içinde yerine getiremezseniz, üniversiteye tam kabulünüz gerçekleşmez ve kayıt yaptıramazsınız. Bu durum vize ve oturma izni gibi konuları da etkileyebilir. Bu nedenle, şartları zamanında ve eksiksiz olarak tamamlamak önemlidir.
    `,
    date: "10 Ağustos 2025",
    readTime: "4 dk",
    category: "Eğitim",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=250&fit=crop&crop=center",
    slug: "egitim-teknolojilerinde-yenilikler"
  }
];

export const categories = ["Tümü",];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentPostId: string, category: string, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, limit);
};