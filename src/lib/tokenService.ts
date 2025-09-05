// Token tabanlı PDF erişim sistemi

interface TokenData {
  email: string;
  timestamp: number;
  expires: number;
}

// Token oluştur (email + timestamp + random)
export const generateAccessToken = (email: string): string => {
  const timestamp = Date.now();
  const expires = timestamp + (24 * 60 * 60 * 1000); // 24 saat geçerli
  
  const tokenData: TokenData = {
    email,
    timestamp,
    expires
  };
  
  // Base64 encode et (gerçek uygulamada JWT kullanılmalı)
  const tokenString = btoa(JSON.stringify(tokenData));
  return tokenString;
};

// Token doğrula
export const validateAccessToken = (token: string): { isValid: boolean; email?: string; error?: string } => {
  try {
    if (!token) {
      return { isValid: false, error: 'Token eksik' };
    }
    
    // Base64 decode et
    const tokenString = atob(token);
    const tokenData: TokenData = JSON.parse(tokenString);
    
    // Geçerlilik süresi kontrol
    if (Date.now() > tokenData.expires) {
      return { isValid: false, error: 'Token süresi dolmuş' };
    }
    
    // Email format kontrol
    if (!tokenData.email || !tokenData.email.includes('@')) {
      return { isValid: false, error: 'Geçersiz email' };
    }
    
    return { 
      isValid: true, 
      email: tokenData.email 
    };
    
  } catch (error) {
    return { isValid: false, error: 'Geçersiz token formatı' };
  }
};

// PDF erişim URL'i oluştur
export const generatePdfAccessUrl = (email: string): string => {
  const token = generateAccessToken(email);
  const baseUrl = window.location.origin;
  return `${baseUrl}/pdf-access?token=${encodeURIComponent(token)}`;
};

// Token'dan email al
export const getEmailFromToken = (token: string): string | null => {
  const validation = validateAccessToken(token);
  return validation.isValid ? validation.email : null;
};