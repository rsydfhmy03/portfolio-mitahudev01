import React from 'react';
import { 
  Code2, Database, Globe, Server, Terminal, Cpu, Cloud, 
  LayoutTemplate, Container, Coffee, GitBranch, Layers, 
  Leaf, Zap, Box, Hexagon, Network, ScanFace, Brain, Shield
} from 'lucide-react';
import { SkillCategory } from '../types/content.types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Cursed Speech (Languages)',
    items: [
      { name: 'Java', icon: React.createElement(Coffee, { size: 24 }), level: 8 },
      { name: 'Python', icon: React.createElement(Terminal, { size: 24 }), level: 8 },
      { name: 'TypeScript', icon: React.createElement(Code2, { size: 24 }), level: 9 },
      { name: 'PHP', icon: React.createElement(Code2, { size: 24 }), level: 7 },
      { name: 'Dart', icon: React.createElement(Code2, { size: 24 }), level: 6 },
    ]
  },
  {
    id: 'backend',
    name: 'Innate Techniques (Backend)',
    items: [
      { name: 'Laravel', icon: React.createElement(Box, { size: 24 }), level: 8 },
      { name: 'Spring Boot', icon: React.createElement(Leaf, { size: 24 }), level: 7 },
      { name: 'AdonisJS', icon: React.createElement(Server, { size: 24 }), level: 9 },
      { name: 'FastAPI', icon: React.createElement(Zap, { size: 24 }), level: 8 },
      { name: 'Express.js', icon: React.createElement(Terminal, { size: 24 }), level: 9 },
      { name: 'Flask', icon: React.createElement(Coffee, { size: 24 }), level: 7 },
    ]
  },
  {
    id: 'frontend',
    name: 'Shikigami (Frontend)',
    items: [
      { name: 'React', icon: React.createElement(Globe, { size: 24 }), level: 9 },
      { name: 'Angular', icon: React.createElement(Layers, { size: 24 }), level: 8 },
      { name: 'Tailwind', icon: React.createElement(LayoutTemplate, { size: 24 }), level: 9 },
      { name: 'Bootstrap', icon: React.createElement(LayoutTemplate, { size: 24 }), level: 8 },
      { name: 'jQuery', icon: React.createElement(Code2, { size: 24 }), level: 7 },
    ]
  },
  {
    id: 'cloud_devops',
    name: 'Domain Expansion (Infra)',
    items: [
      { name: 'GCP', icon: React.createElement(Cloud, { size: 24 }), level: 9 },
      { name: 'Docker', icon: React.createElement(Container, { size: 24 }), level: 8 },
      { name: 'Git/GitHub', icon: React.createElement(GitBranch, { size: 24 }), level: 9 },
      { name: 'Postman', icon: React.createElement(Network, { size: 24 }), level: 9 },
      { name: 'CI/CD', icon: React.createElement(Hexagon, { size: 24 }), level: 7 },
    ]
  },
  {
    id: 'data_ai',
    name: 'Six Eyes (Data & AI)',
    items: [
      { name: 'PostgreSQL', icon: React.createElement(Database, { size: 24 }), level: 8 },
      { name: 'MySQL', icon: React.createElement(Database, { size: 24 }), level: 8 },
      { name: 'Supabase', icon: React.createElement(Database, { size: 24 }), level: 8 },
      { name: 'Redis', icon: React.createElement(Layers, { size: 24 }), level: 7 },
      { name: 'TensorFlow', icon: React.createElement(Brain, { size: 24 }), level: 6 },
      { name: 'OpenCV', icon: React.createElement(ScanFace, { size: 24 }), level: 6 },
    ]
  }
];