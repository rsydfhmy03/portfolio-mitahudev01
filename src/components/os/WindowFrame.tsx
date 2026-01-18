import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOS } from '../../context/OSContext';
import { AppConfig } from '../../types/os.types';

interface WindowProps {
  app: AppConfig;
  constraintRef: React.RefObject<HTMLDivElement>;
}

const WindowFrame: React.FC<WindowProps> = ({ app, constraintRef }) => {
  const { windows, closeWindow, minimizeWindow, focusWindow, activeWindowId } = useOS();
  const state = windows[app.id];
  const isActive = activeWindowId === app.id;
  
  // Responsive Window Logic
  const [windowSize, setWindowSize] = useState({ width: app.width, height: app.height });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setWindowSize({
          width: window.innerWidth * 0.94,
          height: window.innerHeight * 0.75
        });
      } else {
        setWindowSize({ width: app.width, height: app.height });
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [app.width, app.height]);

  if (!state.isOpen) return null;

  return (
    <AnimatePresence>
      {!state.isMinimized && (
        <motion.div
          drag={!isMobile} 
          dragConstraints={constraintRef}
          dragMomentum={false}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
          onPointerDown={() => focusWindow(app.id)}
          style={{
            zIndex: state.zIndex,
            width: windowSize.width,
            height: windowSize.height,
            position: 'absolute',
            left: isMobile 
              ? 'calc(50% - ' + (windowSize.width / 2) + 'px)' 
              : `calc(50% - ${app.width / 2}px + ${(app.id.length * 5) % 40}px)`,
            top: isMobile 
              ? '10%' 
              : `calc(50% - ${app.height / 2}px + ${(app.id.length * 5) % 40}px)`,
          }}
          className={`
            flex flex-col rounded-xl overflow-hidden 
            border transition-colors duration-200
            ${isActive 
              ? 'border-cursed-cyan/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]' 
              : 'border-white/10 shadow-lg'}
            bg-glass-black backdrop-blur-md
          `}
        >
          {/* MacOS Style Title Bar */}
          <div 
            className={`
              h-10 flex items-center justify-between px-4 select-none
              ${isActive ? 'bg-white/5' : 'bg-white/[0.02]'}
              ${!isMobile ? 'cursor-move' : ''}
              border-b border-white/5
            `}
            onDoubleClick={() => minimizeWindow(app.id)}
          >
             {/* Traffic Lights */}
            <div className="flex items-center gap-2 group">
              <button 
                onClick={(e) => { e.stopPropagation(); closeWindow(app.id); }}
                className="w-3 h-3 rounded-full bg-[#FF5F56] flex items-center justify-center text-black/50 hover:text-black/80 transition-colors"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold">x</span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); minimizeWindow(app.id); }}
                className="w-3 h-3 rounded-full bg-[#FFBD2E] flex items-center justify-center text-black/50 hover:text-black/80 transition-colors"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold">-</span>
              </button>
              <button 
                className="w-3 h-3 rounded-full bg-[#27C93F] flex items-center justify-center text-black/50 hover:text-black/80 transition-colors opacity-50 cursor-default"
              >
              </button>
            </div>

            {/* Title */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-300 absolute left-1/2 -translate-x-1/2 pointer-events-none">
              <span className={`${isActive ? 'text-cursed-cyan' : 'text-gray-500'}`}>
                {app.icon}
              </span>
              <span className="hidden sm:inline">{app.title}</span>
            </div>
            
            <div className="w-12" /> {/* Spacer for balance */}
          </div>

          {/* Window Content */}
          <div className="flex-1 overflow-auto bg-black/20 text-gray-200 relative">
             {/* Grid Texture */}
             <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                  style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
             />
             <div className="relative z-10 h-full">
               {app.component}
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WindowFrame;