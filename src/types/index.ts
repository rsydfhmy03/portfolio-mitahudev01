export interface Skill {
  name: string;
  category: 'Programming Language' | 'Frontend' | 'Backend' | 'DBMS' | 'Machine Learning' | 'Tools' | 'OS';
}

// Tipe untuk setiap proyek di portofolio
export interface Project {
  title: string;
  image: string; // Path ke gambar di folder /public/images/
  description: string;
  tags: string[];
  liveUrl?: string; // Tanda '?' berarti properti ini tidak wajib
  sourceUrl: string;
}

// Tipe untuk setiap pengalaman kerja/magang
export interface Experience {
  role: string;
  company: string;
  period: string;
  descriptions: string[];
}

// Tipe untuk setiap sertifikasi
export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  url: string;
}

// Tipe untuk setiap penghargaan
export interface Award {
  title: string;
  issuer: string;
  issuedDate: string;
  description: string;
}