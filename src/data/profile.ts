import { ProfileData } from '../types/content.types';

export const PROFILE_DATA: ProfileData = {
  name: "Fahmy Rosyadi",
  japaneseName: "ファミー・ロシャディ", 
  title: "Backend Developer",
  grade: "SPECIAL GRADE 1",
  tagline: {
    en: "Distinction Graduate of Bangkit 2024 (Cloud Computing). Specialized in scalable backend architecture and system integration.",
    id: "Lulusan Terbaik (Distinction) Bangkit 2024 (Cloud Computing). Spesialis arsitektur backend yang scalable dan integrasi sistem."
  },
  bio: {
    en: "Informatics Engineering graduate focusing on Backend Development and Cloud Computing. Alumni of Bangkit 2024 (Cloud Computing Path) with 'Distinction' predicate. Specialized in building scalable and secure backend architectures, with experience in System Integration connecting applications with AI LLM services and Computer Vision. Comfortable working with legacy code, performing refactoring, and managing deployment environments using Docker. Always enthusiastic about learning new technologies and ready to provide efficient technical solutions for business needs.",
    id: "Lulusan Teknik Informatika yang berfokus pada pengembangan Backend dan Cloud Computing. Alumni program Bangkit 2024 (Cloud Computing Path) dengan predikat 'Distinction'. Memiliki spesialisasi dalam membangun arsitektur backend yang scalable dan aman, serta berpengalaman dalam integrasi sistem (System Integration) yang menghubungkan aplikasi dengan layanan AI LLM maupun Computer Vision. Terbiasa bekerja dengan legacy code, melakukan refactoring, serta mengelola deployment environment menggunakan Docker. Selalu antusias mempelajari teknologi baru dan siap memberikan solusi teknis yang efisien untuk kebutuhan bisnis."
  },
  hardSkills: [
    "Backend Architecture", "RESTful API", "System Integration (AI/LLM/CV)", 
    "Docker & Containerization", "Database Optimization", "Cloud Computing (GCP)", 
    "Debugging & Refactoring"
  ],
  softSkills: [
    "Problem Solving", "Adaptability", "Resilience", 
    "Technical Communication", "Self-Management"
  ],
  languages: [
    { language: "Indonesian", proficiency: "Native or bilingual proficiency" },
    { language: "Javanese", proficiency: "Native or bilingual proficiency" },
    { language: "English", proficiency: "Limited working proficiency" }
  ],
  location: "East Java, Indonesia",
  email: "fahmyrosyadi29@gmail.com",
  socials: {
    github: "https://github.com/mitahudev03",
    gitlab: "https://gitlab.com/rsydfhmy03",
    linkedin: "https://www.linkedin.com/in/mitahudev03",
    instagram: "https://www.instagram.com/mitahudev.03"
  },
  cvUrl: "/assets/pdf/cv.pdf", 
  stats: [
    { label: 'CURSED ENERGY (Backend)', value: 92, color: '#ff003c' },
    { label: 'DOMAIN (Cloud)', value: 88, color: '#a855f7' },
    { label: 'TECHNIQUE (Integration)', value: 85, color: '#00f0ff' },
    { label: 'SHIKIGAMI (AI/ML)', value: 75, color: '#22c55e' },
  ]
};