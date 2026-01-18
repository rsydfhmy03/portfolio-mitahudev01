import React, { lazy, Suspense } from 'react';
import { User, Terminal, Briefcase, Cpu, Medal, FolderOpen } from 'lucide-react';
import { AppConfig } from '../types/os.types';
// import Profile from '../components/apps/Profile/index';
// import TerminalApp from '../components/apps/Terminal';
// import Skills from '../components/apps/Skills';
// import MissionLogs from '../components/apps/MissionLogs';
// import Projects from '../components/apps/Projects/index';
// import Certifications from '../components/apps/Certifications';
const TerminalApp = lazy(() => import('../components/apps/Terminal'));
const Profile = lazy(() => import('../components/apps/Profile/index'));
const Skills = lazy(() => import('../components/apps/Skills'));
const MissionLogs = lazy(() => import('../components/apps/MissionLogs'));
const Projects = lazy(() => import('../components/apps/Projects/index'));
const Certifications = lazy(() => import('../components/apps/Certifications'));

// ==========================================
// SYSTEM ASSETS
// ==========================================
export const SYSTEM_ASSETS = {
  // File located at: public/assets/images/walpaper.png
  WALLPAPER: '/assets/images/walpaper/bg.webp',
  // You can replace this with your actual photo path, e.g., '/assets/images/avatar.jpg'
  // using a high-quality placeholder for now that fits the aesthetic
  PROFILE_PIC: '/assets/images/avatar/profile.png', 
};

const LazyApp = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="p-4 text-cursed-cyan font-mono animate-pulse">LOADING_DATA...</div>}>
    {children}
  </Suspense>
);

// ==========================================
// APP REGISTRY
// ==========================================
export const APP_REGISTRY: AppConfig[] = [
  {
    id: 'terminal',
    title: 'TERMINAL_V1.0',
    icon: <Terminal size={20} />,
    component: <LazyApp><TerminalApp /></LazyApp>,
    width: 600,
    height: 400,
  },
  {
    id: 'profile',
    title: 'SORCERER_ID',
    icon: <User size={20} />,
    component: <LazyApp><Profile /></LazyApp>,
    width: 800, // Widened for the new layout
    height: 550,
  },
  {
    id: 'skills',
    title: 'CURSED_TOOLS',
    icon: <Cpu size={20} />,
    component: <LazyApp><Skills /></LazyApp>,
    width: 600,
    height: 500,
  },
  {
    id: 'logs',
    title: 'MISSION_LOGS',
    icon: <Briefcase size={20} />,
    component: <LazyApp><MissionLogs /></LazyApp>,
    width: 650,
    height: 550,
  },
  {
    id: 'projects',
    title: 'ARCHIVES',
    icon: <FolderOpen size={20} />,
    component: <LazyApp><Projects /></LazyApp>,
    width: 800,
    height: 600,
  },
  {
    id: 'certifications',
    title: 'CERTIFICATIONS',
    icon: <Medal size={20} />,
    component: <LazyApp><Certifications /></LazyApp>,
    width: 500,
    height: 500,
  },
];

export const INITIAL_BOOT_SEQUENCE = true;