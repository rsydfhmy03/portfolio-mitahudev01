import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { AppID, WindowState, Language } from '../types/os.types';

interface OSContextType {
  windows: Record<AppID, WindowState>;
  activeWindowId: AppID | null;
  openWindow: (id: AppID) => void;
  closeWindow: (id: AppID) => void;
  minimizeWindow: (id: AppID) => void;
  focusWindow: (id: AppID) => void;
  isBooting: boolean;
  setBooting: (state: boolean) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export const OSProvider = ({ children }: { children: ReactNode }) => {
  const [isBooting, setBooting] = useState(true);
  const [language, setLanguage] = useState<Language>('en');
  
  const [windows, setWindows] = useState<Record<AppID, WindowState>>({
    terminal: { id: 'terminal', isOpen: true, isMinimized: false, zIndex: 10 },
    profile: { id: 'profile', isOpen: false, isMinimized: false, zIndex: 0 },
    skills: { id: 'skills', isOpen: false, isMinimized: false, zIndex: 0 },
    logs: { id: 'logs', isOpen: false, isMinimized: false, zIndex: 0 },
    projects: { id: 'projects', isOpen: false, isMinimized: false, zIndex: 0 },
    certifications: { id: 'certifications', isOpen: false, isMinimized: false, zIndex: 0 },
  });
  const [activeWindowId, setActiveWindowId] = useState<AppID | null>('terminal');
  const [maxZIndex, setMaxZIndex] = useState(10);

  const focusWindow = useCallback((id: AppID) => {
    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);
    setActiveWindowId(id);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: false, zIndex: newZ },
    }));
  }, [maxZIndex]);

  const openWindow = useCallback((id: AppID) => {
    setWindows((prev) => {
      const newZ = maxZIndex + 1;
      
      if (prev[id].isOpen) {
        if (prev[id].isMinimized || activeWindowId !== id) {
           setMaxZIndex(newZ);
           setActiveWindowId(id);
           return {
             ...prev,
             [id]: { ...prev[id], isMinimized: false, zIndex: newZ }
           };
        }
        return prev;
      }

      setMaxZIndex(newZ);
      setActiveWindowId(id);
      return {
        ...prev,
        [id]: { ...prev[id], isOpen: true, isMinimized: false, zIndex: newZ },
      };
    });
  }, [maxZIndex, activeWindowId]);

  const closeWindow = useCallback((id: AppID) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  }, [activeWindowId]);

  const minimizeWindow = useCallback((id: AppID) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  }, [activeWindowId]);

  return (
    <OSContext.Provider
      value={{
        windows,
        activeWindowId,
        openWindow,
        closeWindow,
        minimizeWindow,
        focusWindow,
        isBooting,
        setBooting,
        language,
        setLanguage
      }}
    >
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) throw new Error('useOS must be used within an OSProvider');
  return context;
};