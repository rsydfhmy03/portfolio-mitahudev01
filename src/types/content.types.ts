import { ReactNode } from 'react';

export type ProjectCategory = 'All' | 'Web' | 'Mobile' | 'Backend' | 'AI/ML' | 'IoT' | 'Cloud' | 'Frontend';

// Helper type for bilingual content
export type LocalizedString = string | { en: string; id: string };

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string; // Image URL or YouTube Embed URL
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  categories: ProjectCategory[]; // Changed to array
  association?: string; // e.g. "Associated with Bangkit Academy"
  date: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  media: ProjectMedia[]; // Gallery support
  demoLink?: string;
  githubLink?: string;
  isConfidential?: boolean; // If true, hides code
}

export interface SkillItem {
  name: string;
  icon: ReactNode;
  level: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  items: SkillItem[];
}

export interface MediaAttachment {
  type: 'image' | 'link' | 'pdf';
  url: string;
  thumbnail?: string;
  title: string;
}

export interface Experience {
  id: string;
  category: 'work' | 'education' | 'organization';
  role: string;
  company: string;
  logo?: string;
  period: string;
  location?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'HIATUS';
  description: string;
  achievements: string[];
  techStack?: string[];
  media?: MediaAttachment[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  orientation: 'landscape' | 'portrait';
  description?: string;
  association?: string;
  media?: MediaAttachment[];
}

export interface ProfileStat {
  label: string;
  value: number; // 0-100
  color: string;
}

export interface ProfileData {
  name: string;
  japaneseName?: string;
  title: string;
  grade: string;
  tagline: LocalizedString; // Changed to LocalizedString
  bio: LocalizedString; // Changed to LocalizedString
  hardSkills: string[];
  softSkills: string[];
  languages: { language: string; proficiency: string }[];
  location: string;
  email: string;
  socials: {
    github: string;
    gitlab: string;
    linkedin: string;
    instagram: string;
  };
  cvUrl: string;
  stats: ProfileStat[];
}