import emailjs from '@emailjs/browser';
import { generatePdfAccessUrl } from './tokenService';
import { addEmailRequest } from './emailStorage';

// EmailJS konfigürasyonu - Bu değerleri gerçek değerlerle değiştirin
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_sphyl7f', // Gmail service ID
  TEMPLATE_ID: 'template_bfi1qxd', // Template ID  
  PUBLIC_KEY: 'jRkJ2m7IyOkQJEO8t', // Public key
};

// EmailJS'i initialize et

emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export interface EmailData {
  to_email: string;
  to_name?: string;
  message?: string;
}

export const sendEmailWithPDF = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log('EmailJS konfigürasyonu:', EMAILJS_CONFIG);
    
    // PDF erişim URL'i oluştur (token tabanlı)
    const pdfAccessUrl = generatePdfAccessUrl(emailData.to_email);
    console.log('PDF erişim URL oluşturuldu:', pdfAccessUrl);
    
    // Email adresini storage'a kaydet
    const token = new URL(pdfAccessUrl).searchParams.get('token');
    const emailRecord = addEmailRequest(emailData.to_email, emailData.to_name, token || undefined);
    console.log('Email kaydedildi:', emailRecord);
    
    const message = `Merhaba ${emailData.to_name || 'Değerli Okuyucu'}!

Talep ettiğiniz "Almanya'ya Şartlı Kabul Öğrenci Rehberi" e-kitabı hazır!

Bu e-kitapta bulacaklarınız:
✅ Almanya'ya geliş süreci adım adım
✅ Gerekli belgeler ve işlemler
✅ Yaşayabileceğiniz zorluklar ve çözümleri
✅ Kişisel deneyimler ve ipuçları

E-kitabınıza erişmek için aşağıdaki butona tıklayın:

⚠️ Önemli: Bu erişim yalnızca sizin e-posta adresiniz için oluşturulmuştur ve 24 saat geçerlidir.

İyi okumalar dilerim!

Saygılarımla,
Berkay`;
    
    const templateParams = {
      to_email: emailData.to_email,
      to_name: emailData.to_name || 'Değerli Okuyucu',
      subject: 'E-Kitabınız Hazır! 📖 - Almanya Öğrenci Rehberi',
      message: message,
      pdf_access_url: pdfAccessUrl,
      access_button_text: 'E-Kitabı Görüntüle',
    };
    
    console.log('Gönderilecek template params:', templateParams);

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('Email başarıyla gönderildi:', result);
    return true;
  } catch (error) {
    console.error('DETAYLI Email gönderme hatası:', error);
    console.error('Hata detayları:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    return false;
  }
};

// Basit test fonksiyonu - PDF olmadan
export const sendTestEmailSimple = async (email: string): Promise<boolean> => {
  try {
    console.log('Basit test e-postası gönderiliyor...');
    
    const templateParams = {
      to_email: email,
      to_name: 'Test Kullanıcısı',
      subject: 'Test E-postası - EmailJS Konfigürasyon Testi',
      message: 'Bu bir test e-postasıdır. EmailJS konfigürasyonunuz çalışıyor!',
      pdf_attachment: '',
      pdf_filename: '',
      has_attachment: 'false',
    };
    
    console.log('Test template params:', templateParams);

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('Test e-postası başarıyla gönderildi:', result);
    return true;
  } catch (error) {
    console.error('Test e-postası hatası:', error);
    return false;
  }
};

// Konfigürasyon kontrol
export const checkEmailJSConfig = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'service_xxxxxxx') {
    errors.push('SERVICE_ID eksik veya değiştirilmemiş');
  }
  
  if (!EMAILJS_CONFIG.TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID === 'template_xxxxxxx') {
    errors.push('TEMPLATE_ID eksik veya değiştirilmemiş');
  }
  
  if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'xxxxxxxxxxxxxxxxxx') {
    errors.push('PUBLIC_KEY eksik veya değiştirilmemiş');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
