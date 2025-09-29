import { Project, Experience, Skill, Certification, Award } from '@/types';

// DATA PENGALAMAN (EXPERIENCE)
export const experiences: Experience[] = [
  {
    role: "Web Developer",
    company: "Social Economic Accelerator Lab (SEAL) | MSIB Batch 7",
    period: "Sep 2024 - Des 2024",
    descriptions: [
      "Mengembangkan aplikasi web full-stack untuk klien PIS Japan Career dan platform Malang Mbois City Tour (MMCT) menggunakan Adonis.js dan Angular.js.",
      "Mengintegrasikan API pihak ketiga, termasuk payment gateway Midtrans untuk MMCT.",
      "Mendesain ulang alur kerja admin, seperti sistem pembuatan paket di MMCT, untuk meningkatkan efisiensi operasional.",
      "Berkolaborasi dalam tim untuk menangani kebutuhan proyek dari pengembangan hingga pengiriman untuk klien lokal dan internasional."
    ]
  },
  {
    role: "Cloud Engineer",
    company: "Bangkit 2024 H1 | MSIB Batch 6",
    period: "Feb 2024 - Jun 2024",
    descriptions: [
      "Lulus dengan predikat 'With Distinction', diakui sebagai salah satu dari 10% lulusan terbaik.",
      "Merancang dan mengimplementasikan RESTful API menggunakan Express.js untuk mendukung fungsionalitas model Machine Learning.",
      "Mengelola dan mengotomatisasi proses CI/CD untuk deployment aplikasi di Google App Engine.",
      "Menyelesaikan semua kursus Cloud Computing, Backend, dan IT Support dengan status 'Ahead of schedule'."
    ]
  }
];

// DATA PROYEK (PROJECTS)
export const projects: Project[] = [
  {
    title: "MMCT - City Tour App",
    image: "/images/projects/mmct.png",
    description: "Aplikasi city tour yang dikembangkan untuk klien guna mempromosikan pariwisata di Malang.",
    tags: ["Adonis.js", "Angular.js", "Midtrans", "PostgreSQL", "Redis", "WebSocket"],
    liveUrl : "https://mmct.mcf.or.id/beranda",
    sourceUrl: "https://github.com/rsydfhmy03" 
  },
  {
    title: "GansDoctor - Deepfake Detector",
    image: "/images/projects/gansdoctor.jpeg",
    description: "Aplikasi mobile untuk mendeteksi manipulasi deepfake pada foto wajah menggunakan model VGG16.",
    tags: ["VGG16", "Tensorflow", "OpenCV","Keras", "Cloud Run","FastAPI", "MobileApp", "Deep Learning"],
    liveUrl : "https://play.google.com/store/apps/details?id=com.mitahudev.gansdoctor&hl=id",
    sourceUrl: "https://github.com/rsydfhmy03" 
  },
  {
    title: "SootheMate - Stress AI Therapy",
    image: "/images/projects/sootheMate.png",
    description: "Sebuah AI Therapy untuk membantu pengguna memonitor dan mengelola tingkat stres mereka secara efektif.",
    tags: ["AI", "Machine Learning", "App Engine","Mobiles App"],
    sourceUrl: "https://github.com/rsydfhmy03" 
  },
  {
    title: "Intelligent Doorbells",
    image: "/images/projects/bel.jpeg",
    description: "Merancang sistem bel pintu cerdas menggunakan ESP32-CAM yang mampu mendeteksi wajah orang asing.",
    tags: ["IoT", "ESP32-CAM", "Embedded Systems", "OpenCV", "Machine Learning"],
    sourceUrl: "https://github.com/rsydfhmy03" 
  }
];

// DATA KEAHLIAN (SKILLS)
export const skills: Skill[] = [
  { name: 'Java', category: 'Programming Language' },
  { name: 'Dart', category: 'Programming Language' },
  { name: 'JavaScript', category: 'Programming Language' },
  { name: 'TypeScript', category: 'Programming Language' },
  { name: 'Python', category: 'Programming Language' },
  { name: 'PHP', category: 'Programming Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'JQuery', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Adonis.js', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'PostgreSQL', category: 'DBMS' },
  { name: 'MySQL', category: 'DBMS' },
  { name: 'Firebase', category: 'DBMS' },
  { name: 'Git', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'GCP', category: 'Tools' },
  { name: 'Docker', category: 'Tools' }
];