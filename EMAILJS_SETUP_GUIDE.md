/* 
📧 EMAILJS PDF ATTACHMENT KURULUM REHBERİ - Adım Adım

Bu rehber ile EmailJS'i kurup direkt PDF attachment gönderim sisteminizi çalıştırabilirsiniz.

🔧 1. EMAILJS HESAP KURULUMU
================================
- https://www.emailjs.com/ adresine gidin
- "Sign Up" ile ücretsiz hesap oluşturun (200 e-posta/ay)
- Dashboard'a giriş yapın

📧 2. EMAIL SERVICE EKLEME
============================
- Sol menüden "Email Services" seçin
- "Add New Service" butonuna tıklayın
- "Gmail" seçin (en pratik seçenek)
- Gmail hesabınızla bağlantı kurun
- Service ID'yi kopyalayın (örn: service_gmail123)
- "Test" butonuyla bağlantıyı doğrulayın

📝 3. EMAIL TEMPLATE OLUŞTURMA
===============================
- Sol menüden "Email Templates" seçin  
- "Create New Template" butonuna tıklayın
- Template adı: "PDF_Access_Template"

⚠️ Önemli: EmailJS'te Subject ve Content ayrı alanlar!

**SUBJECT Alanına sadece şunu yazın:**
{{subject}}

**TO NAME alanına:**
{{to_name}}

**TO EMAIL alanına:**
{{to_email}}

**CONTENT Alanına aşağıdaki HTML template'i kopyalayıp yapıştırın:**

---HTML EMAIL TEMPLATE İÇERİĞİ BAŞLANGIÇ---
<div style="font-family: system-ui, sans-serif, Arial; font-size: 16px; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
  <!-- Header -->
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #1a1a1a; font-size: 24px; margin: 0; font-weight: bold;">📖 E-Kitabınız Hazır!</h1>
  </div>
  
  <!-- Greeting -->
  <p style="padding-top: 16px; border-top: 2px solid #eaeaea; color: #333; line-height: 1.6;">Merhaba {{to_name}},</p>
  
  <!-- Main Message -->
  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p style="color: #333; line-height: 1.6; margin: 0;">{{message}}</p>
  </div>
  
  <!-- PDF Access Button -->
  <div style="text-align: center; margin: 30px 0;">
    <a href="{{pdf_access_url}}" style="display: inline-block; background-color: #000000; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
      📖 {{access_button_text}}
    </a>
  </div>
  
  <!-- Features List -->
  <div style="margin: 25px 0;">
    <h3 style="color: #1a1a1a; font-size: 18px; margin-bottom: 15px;">Bu e-kitapta bulacaklarınız:</h3>
    <ul style="color: #333; line-height: 1.8; padding-left: 20px;">
      <li>✅ Almanya'ya geliş süreci adım adım</li>
      <li>✅ Gerekli belgeler ve işlemler</li>
      <li>✅ Yaşayabileceğiniz zorluklar ve çözümleri</li>
      <li>✅ Kişisel deneyimler ve ipuçları</li>
    </ul>
  </div>
  
  <!-- Security Notice -->
  <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 6px; padding: 15px; margin: 20px 0;">
    <p style="margin: 0; color: #856404; font-size: 14px;">
      ⚠️ <strong>Önemli:</strong> Bu link yalnızca sizin e-posta adresiniz için oluşturulmuştur ve 24 saat geçerlidir. Güvenliğiniz için başkalarıyla paylaşmayın.
    </p>
  </div>
  
  <!-- Footer -->
  <div style="padding-top: 20px; border-top: 2px solid #eaeaea; margin-top: 30px;">
    <p style="color: #333; line-height: 1.6;">İyi okumalar dilerim!</p>
    <p style="color: #333; line-height: 1.6; margin-bottom: 0;">
      Saygılarımla,<br />
      <strong>Berkay</strong>
    </p>
  </div>
  
  <!-- Email Info -->
  <div style="margin-top: 30px; padding: 15px; background-color: #f1f5f9; border-radius: 6px; text-align: center;">
    <p style="color: #64748b; font-size: 12px; margin: 0;">Bu e-posta {{to_email}} adresine gönderilmiştir.</p>
  </div>
</div>
---HTML EMAIL TEMPLATE İÇERİĞİ BİTİŞ---

- "Save" ile kaydedin
- Template ID'yi kopyalayın (örn: template_abc123)

⚠️ ÇOK ÖNEMLİ: Template ayarlarında aşağıdaki alanları doğru şekilde ayarlayın:

**Template Settings:**
- **To Email**: {{to_email}}
- **To Name**: {{to_name}} 
- **From Name**: Berkay (veya istediğiniz ad)
- **From Email**: Kendi e-posta adresiniz
- **Subject**: {{subject}}
- **Reply To**: Kendi e-posta adresiniz

**Content alanına yukarıdaki HTML kodu**

🔑 4. PUBLIC KEY ALMA
======================
- Sol menüden "Account" > "General" seçin
- "Public Key" bölümünden anahtarı kopyalayın
- Örnek: pk_live_xxxxxxxxxxxxxxxxxx

📁 5. PDF DOSYASI HAZIRLAMA
============================
- PDF dosyanızı hazırlayın
- Dosya adı: "almanya-ogrenci-rehberi.pdf"
- public/assets/ klasörüne koyun
- Dosya yolu: /assets/almanya-ogrenci-rehberi.pdf

⚠️ Önemlı: 
- PDF boyutu max 10MB olmalı (e-posta sınırı)
- Dosya adında özel karakter kullanmayın

⚙️ 6. KOD KONFIGÜRASYONU
==========================
src/lib/emailService.ts dosyasında şu değerleri güncelleyin:

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_gmail123',     // 2. adımdan aldığınız
  TEMPLATE_ID: 'template_abc123',     // 3. adımdan aldığınız  
  PUBLIC_KEY: 'pk_live_xxxxxxxx',     // 4. adımdan aldığınız
};

🧪 7. TEST ETME
================
1. Projeyi çalıştırın: npm run dev
2. CallToAction bölümünde e-posta adresinizi girin
3. "📖 Kitabı Gönder" butonuna tıklayın
4. E-postanızı kontrol edin
5. PDF'in ek dosya olarak geldiğini kontrol edin

📪 EMAIL TEMPLATE ALTERNİFİ (PRO)
=======================================
Eğer EmailJS Pro planınız varsa, attachment desteği için:

---PRO TEMPLATE---
Subject: {{subject}}

{{message}}

Attachment: {{pdf_attachment}}
---PRO TEMPLATE---

❗ ÖNEMLİ NOTLAR
================
- Ücretsiz plan: 200 e-posta/ay
- Gmail App Password gerekebilir (2FA aktifse)
- PDF attachment için stable internet bağlantısı gerekli
- Base64 encoding nedeniyle dosya boyutu %33 artar

🔧 SORUN GİDERME
=================
1. "Service ID not found" hatası:
   - Service ID'yi kontrol edin
   - Service'in aktif olduğunu doğrulayın

2. "Template not found" hatası:
   - Template ID'yi kontrol edin
   - Template'in publish edildiğini doğrulayın

3. "The recipients address is empty" hatası:
   - Template settings'te "To Email" alanına {{to_email}} yazdığınızdan emin olun
   - "To Name" alanına {{to_name}} yazdığınızdan emin olun
   - Template'i kaydetmeyi unutmayın

4. "Failed to send email" hatası:
   - Public Key'i kontrol edin
   - Internet bağlantısını kontrol edin
   - Console'da detaylı hata mesajına bakın

5. PDF yüklenmiyor:
   - /assets/ekitap.pdf yolunu kontrol edin
   - Dosya boyutunu kontrol edin (max 10MB)
   - Browser developer tools > Network tab'da dosya isteğini kontrol edin

6. E-posta gelmiyor:
   - Spam klasörünü kontrol edin
   - Gmail'de "Promotions" tabını kontrol edin
   - Template içeriğini kontrol edin

📞 DESTEK
==========
Herhangi bir sorun yaşarsanız:
- EmailJS Documentation: https://www.emailjs.com/docs/
- Bu projenin GitHub issues bölümünde soru sorabilirsiniz

Başarılar! 🚀
*/

export {};