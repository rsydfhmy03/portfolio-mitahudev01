import { ReactNode } from 'react';

export type AppID = 'profile' | 'skills' | 'logs' | 'projects' | 'certifications' | 'terminal';
export type Language = 'en' | 'id';

export interface AppConfig {
  id: AppID;
  title: string;
  icon: ReactNode;
  component: ReactNode;
  width: number;
  height: number;
}

export interface WindowState {
  id: AppID;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
}

export interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}