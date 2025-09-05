import { useEffect, useState } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import { validateAccessToken } from '@/lib/tokenService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Eye, AlertTriangle, Clock } from 'lucide-react';

const PdfAccess = () => {
  const [searchParams] = useSearchParams();
  const [tokenStatus, setTokenStatus] = useState<{
    isValid: boolean;
    email?: string;
    error?: string;
    loading: boolean;
  }>({ isValid: false, loading: true });

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setTokenStatus({
        isValid: false,
        error: 'Erişim token\'i bulunamadı',
        loading: false
      });
      return;
    }

    // Token doğrulama
    const validation = validateAccessToken(token);
    setTokenStatus({
      ...validation,
      loading: false
    });
  }, [token]);

  // Yetkilendirme kontrolü
  if (tokenStatus.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Token doğrulanıyor...</p>
        </div>
      </div>
    );
  }

  if (!tokenStatus.isValid) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <CardTitle className="text-destructive">Erişim Reddedildi</CardTitle>
            <CardDescription>
              {tokenStatus.error || 'Bu sayfaya erişim yetkiniz bulunmuyor'}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              E-posta adresinizi kullanarak e-kitabı talep etmeniz gerekiyor.
            </p>
            <Button onClick={() => window.location.href = '/'}>
              Ana Sayfaya Dön
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // PDF indirme fonksiyonu
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/ekitap.pdf';
    link.download = 'Almanya-Ogrenci-Rehberi.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // PDF görüntüleme fonksiyonu
  const handleView = () => {
    window.open('/assets/ekitap.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            E-Kitabınız Hazır! 📖
          </h1>
          <p className="text-gray-600">
            Hoş geldiniz <strong>{tokenStatus.email}</strong>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* PDF Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📚 Almanya'ya Şartlı Kabul Öğrenci Rehberi
                </CardTitle>
                <CardDescription>
                  Almanya'ya öğrenci olarak gelme sürecindeki tüm deneyimlerimi ve ipuçlarını içeren kapsamlı rehberim.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <Button onClick={handleView} className="h-14" variant="default">
                    <Eye className="mr-2 h-5 w-5" />
                    Kitabı Görüntüle
                  </Button>
                  <Button onClick={handleDownload} className="h-14" variant="outline">
                    <Download className="mr-2 h-5 w-5" />
                    PDF İndir
                  </Button>
                </div>

                {/* Kitap İçeriği */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Bu e-kitapta bulacaklarınız:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>Almanya'ya geliş süreci adım adım rehberi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>Gerekli belgeler ve işlemler listesi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>Yaşayabileceğiniz zorluklar ve çözüm önerileri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>Kişisel deneyimler ve pratik ipuçları</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>Bürokratik süreçler için hazırlık rehberi</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Erişim Bilgileri */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Erişim Bilgileri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-xs text-muted-foreground">
                  <p><strong>E-posta:</strong> {tokenStatus.email}</p>
                  <p><strong>Erişim:</strong> 24 saat geçerli</p>
                  <p><strong>Durum:</strong> <span className="text-green-600">✅ Aktif</span></p>
                </div>
              </CardContent>
            </Card>

            {/* Destek */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">📞 Destek</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3">
                  Kitap hakkında sorularınız varsa benimle iletişime geçebilirsiniz.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  İletişime Geç
                </Button>
              </CardContent>
            </Card>

            {/* Güvenlik */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">🔒 Güvenlik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Bu link yalnızca sizin e-posta adresiniz için oluşturulmuştur. 
                  Güvenliğiniz için linki başkalarıyla paylaşmayın.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <p className="text-sm text-muted-foreground">
            İyi okumalar dilerim! 📚
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Berkay - Almanya Öğrenci Rehberi
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfAccess;