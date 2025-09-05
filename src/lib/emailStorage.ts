// Email storage service for tracking PDF requests

export interface EmailRecord {
  id: string;
  email: string;
  name?: string;
  timestamp: number;
  dateRequested: string;
  pdfAccessToken: string;
}

export interface EmailStorageData {
  emails: EmailRecord[];
  totalRequests: number;
  lastUpdated: string;
}

const STORAGE_KEY = 'pdf_email_requests';

// Generate unique ID for each request
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Format date for display
const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Load existing email data from localStorage
export const loadEmailData = (): EmailStorageData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Email verilerini yüklerken hata:', error);
  }
  
  // Default data structure
  return {
    emails: [],
    totalRequests: 0,
    lastUpdated: new Date().toISOString()
  };
};

// Save email data to localStorage
export const saveEmailData = (data: EmailStorageData): void => {
  try {
    data.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data, null, 2));
    console.log('Email verileri kaydedildi:', data);
  } catch (error) {
    console.error('Email verilerini kaydederken hata:', error);
  }
};

// Add new email request
export const addEmailRequest = (email: string, name?: string, token?: string): EmailRecord => {
  const data = loadEmailData();
  
  // Check if email already exists
  const existingEmail = data.emails.find(record => record.email === email);
  if (existingEmail) {
    console.log('Bu email daha önce kaydedilmiş:', email);
    return existingEmail;
  }
  
  const timestamp = Date.now();
  const newRecord: EmailRecord = {
    id: generateId(),
    email,
    name: name || '',
    timestamp,
    dateRequested: formatDate(timestamp),
    pdfAccessToken: token || ''
  };
  
  data.emails.push(newRecord);
  data.totalRequests = data.emails.length;
  
  saveEmailData(data);
  
  console.log('Yeni email kaydedildi:', newRecord);
  return newRecord;
};

// Get all email records
export const getAllEmailRecords = (): EmailRecord[] => {
  const data = loadEmailData();
  return data.emails.sort((a, b) => b.timestamp - a.timestamp); // Most recent first
};

// Get email statistics
export const getEmailStats = () => {
  const data = loadEmailData();
  const now = Date.now();
  const oneDayAgo = now - (24 * 60 * 60 * 1000);
  const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000);
  const oneMonthAgo = now - (30 * 24 * 60 * 60 * 1000);
  
  return {
    total: data.totalRequests,
    today: data.emails.filter(record => record.timestamp > oneDayAgo).length,
    thisWeek: data.emails.filter(record => record.timestamp > oneWeekAgo).length,
    thisMonth: data.emails.filter(record => record.timestamp > oneMonthAgo).length,
    lastUpdated: data.lastUpdated
  };
};

// Export data as JSON file
export const exportEmailData = (): void => {
  const data = loadEmailData();
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `pdf-email-requests-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
  console.log('Email verileri JSON olarak indirildi');
};

// Clear all email data (with confirmation)
export const clearEmailData = (): boolean => {
  if (confirm('Tüm email verilerini silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.')) {
    localStorage.removeItem(STORAGE_KEY);
    console.log('Tüm email verileri silindi');
    return true;
  }
  return false;
};

// Search emails by email address or name
export const searchEmails = (query: string): EmailRecord[] => {
  const data = loadEmailData();
  const searchTerm = query.toLowerCase();
  
  return data.emails.filter(record => 
    record.email.toLowerCase().includes(searchTerm) ||
    record.name?.toLowerCase().includes(searchTerm)
  );
};