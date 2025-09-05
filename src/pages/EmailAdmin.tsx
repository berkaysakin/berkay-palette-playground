import { useState, useEffect } from 'react';
import { 
  getAllEmailRecords, 
  getEmailStats, 
  exportEmailData, 
  clearEmailData, 
  searchEmails,
  EmailRecord 
} from '@/lib/emailStorage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Trash2, 
  Search, 
  Mail, 
  Users, 
  Calendar, 
  TrendingUp,
  Eye,
  RefreshCw
} from 'lucide-react';

const EmailAdmin = () => {
  const [emails, setEmails] = useState<EmailRecord[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    thisMonth: 0,
    lastUpdated: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Load data
  const loadData = () => {
    setLoading(true);
    try {
      const allEmails = getAllEmailRecords();
      const emailStats = getEmailStats();
      
      setEmails(allEmails);
      setStats(emailStats);
    } catch (error) {
      console.error('Veri yüklenirken hata:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchEmails(query);
      setEmails(results);
    } else {
      setEmails(getAllEmailRecords());
    }
  };

  // Export data
  const handleExport = () => {
    exportEmailData();
  };

  // Clear all data
  const handleClear = () => {
    if (clearEmailData()) {
      loadData();
    }
  };

  // Format date for display
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📧 Email Yönetim Paneli</h1>
          <p className="text-gray-600">PDF talep eden kullanıcıların email bilgilerini görüntüleyin ve yönetin</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Toplam İstek</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bugün</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.today}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bu Hafta</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.thisWeek}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bu Ay</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.thisMonth}</div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Kontroller</CardTitle>
            <CardDescription>Email verilerini yönetin ve dışa aktarın</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Email adresi veya isim ile ara..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button onClick={loadData} variant="outline" disabled={loading}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Yenile
                </Button>
                <Button onClick={handleExport} variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  JSON İndir
                </Button>
                <Button onClick={handleClear} variant="destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Tümünü Sil
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email List */}
        <Card>
          <CardHeader>
            <CardTitle>Email Listesi ({emails.length})</CardTitle>
            <CardDescription>
              {searchQuery ? `"${searchQuery}" için arama sonuçları` : 'Tüm email istekleri'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">Veriler yükleniyor...</p>
              </div>
            ) : emails.length === 0 ? (
              <div className="text-center py-8">
                <Mail className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz email yok</h3>
                <p className="text-gray-500">
                  {searchQuery ? 'Arama kriterlerinize uygun email bulunamadı' : 'İlk email isteği geldiğinde burada görünecek'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {emails.map((record) => (
                  <div key={record.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-full">
                            <Mail className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{record.email}</p>
                            {record.name && (
                              <p className="text-sm text-gray-600">{record.name}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-1">
                          {record.dateRequested}
                        </Badge>
                        <p className="text-xs text-gray-500">ID: {record.id}</p>
                      </div>
                    </div>
                    
                    {record.pdfAccessToken && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-xs text-gray-500 mb-1">PDF Access Token:</p>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded break-all">
                          {record.pdfAccessToken.substring(0, 50)}...
                        </code>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Son güncelleme: {stats.lastUpdated ? new Date(stats.lastUpdated).toLocaleString('tr-TR') : 'Bilinmiyor'}
        </div>
      </div>
    </div>
  );
};

export default EmailAdmin;