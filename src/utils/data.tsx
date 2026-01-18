import React from 'react';
import { 
  Code2, Database, Globe, Server, Terminal, Cpu, Cloud, 
  Shield, Smartphone, Layers, LayoutTemplate, 
  GitBranch, Container, Coffee 
} from 'lucide-react';
import { Project, SkillCategory, Experience, Certification } from '../types';

// ==========================================
// 1. PROJECTS
// ==========================================
export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj_1',
    title: 'Kogane OS',
    categories: ['Web'],
    date: '2024',
    shortDesc: 'React-based OS simulator inspired by JJK.',
    fullDesc: 'A highly interactive portfolio website that mimics a desktop operating system. It features window management, a functional terminal, and heavy use of Framer Motion for animations. The aesthetic is heavily influenced by the Culling Games interface.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop'
    }],
    githubLink: 'https://github.com/username/kogane-os',
    demoLink: 'https://kogane-os.demo',
  },
  {
    id: 'proj_2',
    title: 'Cursed Energy API',
    categories: ['Backend'],
    date: '2023',
    shortDesc: 'High-performance Go backend.',
    fullDesc: 'A robust REST API built with Go and Gin. It handles millions of "cursed energy" transactions per second. Features include JWT authentication, rate limiting, and Dockerized deployment.',
    techStack: ['Go', 'Gin', 'PostgreSQL', 'Docker', 'Redis'],
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop'
    }],
    githubLink: 'https://github.com/username/api',
  },
  {
    id: 'proj_3',
    title: 'E-Commerce Platform',
    categories: ['Web', 'Backend'],
    date: '2023',
    shortDesc: 'Scalable Shopify clone for Enterprise clients.',
    fullDesc: 'Developed the core payment processing module and inventory management system. Migrated the legacy monolith to a microservices architecture using Node.js and gRPC.',
    techStack: ['Node.js', 'NestJS', 'GraphQL', 'MongoDB', 'AWS'],
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop'
    }],
    isConfidential: true,
  },
  {
    id: 'proj_4',
    title: 'React Glassmorphism',
    categories: ['Frontend'],
    date: '2022',
    shortDesc: 'NPM library for UI components.',
    fullDesc: 'An open-source library providing pre-styled glassmorphism components. Has over 1k downloads on NPM.',
    techStack: ['React', 'CSS Modules', 'Rollup'],
    githubLink: 'https://github.com/username/glass-lib',
    media: []
  }
];

// ==========================================
// 2. SKILLS (CURSED TOOLS)
// ==========================================
export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Techniques (Languages)',
    items: [
      { name: 'TypeScript', icon: <Code2 size={24} />, level: 9 },
      { name: 'Go', icon: <Terminal size={24} />, level: 8 },
      { name: 'Python', icon: <Coffee size={24} />, level: 8 },
      { name: 'Rust', icon: <Cpu size={24} />, level: 6 },
    ]
  },
  {
    id: 'frameworks',
    name: 'Cursed Tools (Frameworks)',
    items: [
      { name: 'React', icon: <Globe size={24} />, level: 9 },
      { name: 'Next.js', icon: <LayoutTemplate size={24} />, level: 8 },
      { name: 'Node.js', icon: <Server size={24} />, level: 9 },
      { name: 'PostgreSQL', icon: <Database size={24} />, level: 8 },
    ]
  },
  {
    id: 'devops',
    name: 'Domain Expansion (DevOps)',
    items: [
      { name: 'Docker', icon: <Container size={24} />, level: 8 },
      { name: 'AWS', icon: <Cloud size={24} />, level: 7 },
      { name: 'Git', icon: <GitBranch size={24} />, level: 9 },
      { name: 'Linux', icon: <Terminal size={24} />, level: 7 },
    ]
  }
];

// ==========================================
// 3. MISSION LOGS (EXPERIENCE)
// ==========================================
export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'LOG-003',
    category: 'work',
    role: 'Senior Backend Engineer',
    company: 'Tech Corp',
    period: '2022 - PRESENT',
    status: 'ACTIVE',
    description: 'Leading the backend infrastructure team.',
    achievements: [
      'Architecting microservices for high-scale data processing.',
      'Reduced API latency by 40% using Go and Redis.',
      'Mentored 3 junior developers to mid-level.',
      'Implemented automated CI/CD pipelines reducing deployment time by 60%.'
    ]
  },
  {
    id: 'LOG-002',
    category: 'work',
    role: 'Full Stack Developer',
    company: 'StartUp Inc',
    period: '2020 - 2022',
    status: 'COMPLETED',
    description: 'Core developer for the MVP phase.',
    achievements: [
      'Led the migration from monolith to serverless.',
      'Built the core payment processing module integrating Stripe.',
      'Designed the initial database schema for the user management system.'
    ]
  },
  {
    id: 'LOG-001',
    category: 'work',
    role: 'Junior Sorcerer (Intern)',
    company: 'Web Agency',
    period: '2019 - 2020',
    status: 'COMPLETED',
    description: 'Maintained legacy systems.',
    achievements: [
      'Maintained legacy PHP systems.',
      'Introduced React for interactive frontend components.',
      'Optimized SQL queries for reporting dashboard.'
    ]
  },
];

// ==========================================
// 4. CERTIFICATIONS (LEADERBOARD)
// ==========================================
export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert_1',
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: 'https://images.credly.com/size/340x340/images/0e284c3f-516c-4b21-8660-0d7472bd0734/image.png',
    orientation: 'landscape'
  },
  {
    id: 'cert_2',
    name: 'Certified Kubernetes Admin',
    issuer: 'CNCF',
    date: '2022',
    image: 'https://images.credly.com/size/340x340/images/8b51d659-1736-4074-9844-3c8801ce2658/cka_600.png',
    orientation: 'portrait'
  },
  {
    id: 'cert_3',
    name: 'Professional Scrum Master',
    issuer: 'Scrum.org',
    date: '2021',
    image: 'https://images.credly.com/size/340x340/images/f3822187-5757-4b72-901c-6d2466085a67/image.png',
    orientation: 'landscape'
  }
];