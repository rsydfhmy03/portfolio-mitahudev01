import React, { useState, useRef, useEffect } from 'react';
import { Wifi, Battery, Ghost, Settings, Power, User, Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTime } from '../../hooks/useTime';
import { formatTime } from '../../utils/date';
import { useOS } from '../../context/OSContext';

const TopBar: React.FC = () => {
  const time = useTime();
  const { openWindow, language, setLanguage } = useOS();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuAction = (action: () => void) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 z-[100] flex items-center justify-between px-2 sm:px-4 text-xs font-mono text-gray-400 select-none">
      
      {/* Left: System Menu (Apple-style but JJK) */}
      <div className="relative" ref={menuRef}>
        <div className="flex items-center gap-4">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`
                    flex items-center gap-2 px-2 py-1 rounded transition-colors
                    ${isMenuOpen ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-cursed-cyan'}
                `}
            >
                <Ghost size={16} className={isMenuOpen ? "text-cursed-red" : ""} />
                <span className="font-bold hidden sm:inline tracking-wider">KOGANE_SYS</span>
            </button>
            
            {/* App Name / Current Context */}
            <span className="font-bold text-gray-500 hidden md:inline">
                Grade 1 Sorcerer Portfolio
            </span>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1 }}
                    className="absolute top-9 left-0 w-56 bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col py-1.5"
                >
                    <div className="px-3 py-1.5 text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1 border-b border-white/5">
                        System Controls
                    </div>

                    <button 
                        onClick={() => handleMenuAction(() => openWindow('profile'))}
                        className="px-4 py-2 text-left text-gray-300 hover:bg-cursed-cyan/10 hover:text-cursed-cyan transition-colors flex items-center gap-3"
                    >
                        <User size={14} />
                        About This Sorcerer
                    </button>

                    <div className="my-1 border-t border-white/10" />

                    <div className="px-4 py-2">
                        <div className="flex items-center gap-3 text-gray-300 mb-2">
                            <Globe size={14} />
                            <span>Language / Bahasa</span>
                        </div>
                        <div className="flex flex-col gap-1 pl-7">
                            <button 
                                onClick={() => handleMenuAction(() => setLanguage('en'))}
                                className={`flex items-center justify-between text-[11px] px-2 py-1 rounded border ${language === 'en' ? 'border-cursed-cyan/30 bg-cursed-cyan/10 text-cursed-cyan' : 'border-transparent text-gray-500 hover:bg-white/5'}`}
                            >
                                <span>English</span>
                                {language === 'en' && <Check size={10} />}
                            </button>
                            <button 
                                onClick={() => handleMenuAction(() => setLanguage('id'))}
                                className={`flex items-center justify-between text-[11px] px-2 py-1 rounded border ${language === 'id' ? 'border-cursed-cyan/30 bg-cursed-cyan/10 text-cursed-cyan' : 'border-transparent text-gray-500 hover:bg-white/5'}`}
                            >
                                <span>Indonesia</span>
                                {language === 'id' && <Check size={10} />}
                            </button>
                        </div>
                    </div>

                    <div className="my-1 border-t border-white/10" />

                    <button 
                        onClick={() => handleMenuAction(() => window.location.reload())}
                        className="px-4 py-2 text-left text-cursed-red hover:bg-cursed-red/10 transition-colors flex items-center gap-3"
                    >
                        <Power size={14} />
                        Force Shutdown
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Center: Time */}
      <div className="absolute left-1/2 -translate-x-1/2 font-bold text-gray-200 tracking-widest">
        {formatTime(time)}
      </div>

      {/* Right: Status Indicators */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-help group" title="Cursed Energy Output">
          <span className="hidden sm:inline text-[10px]">WIFI</span>
          <Wifi size={14} className="text-cursed-cyan group-hover:animate-pulse" />
        </div>
        <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-help group" title="Internal Battery">
          <span className="hidden sm:inline text-[10px]">100%</span>
          <Battery size={14} className="text-cursed-red group-hover:animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;