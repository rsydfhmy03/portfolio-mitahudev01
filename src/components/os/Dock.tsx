import React from 'react';
import { motion } from 'framer-motion';
import { APP_REGISTRY } from '../../utils/constants';
import { useOS } from '../../context/OSContext';

const Dock: React.FC = () => {
  const { openWindow, minimizeWindow, windows, activeWindowId } = useOS();

  const handleAppClick = (appId: string) => {
    const windowState = windows[appId as keyof typeof windows];
    const isActive = activeWindowId === appId;

    if (windowState.isOpen && isActive && !windowState.isMinimized) {
      // If open, active, and not minimized -> Minimize it
      minimizeWindow(appId as any);
    } else {
      // Otherwise (minimized, or not active, or closed) -> Open/Restore/Focus
      openWindow(appId as any);
    }
  };

  return (
    <div className="fixed bottom-1 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] sm:max-w-fit overflow-x-auto sm:overflow-visible no-scrollbar">
      <div className="flex items-end justify-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl min-w-fit mx-auto">
        {APP_REGISTRY.map((app) => {
          const isOpen = windows[app.id].isOpen;
          const isMinimized = windows[app.id].isMinimized;
          const isActive = activeWindowId === app.id;
          
          return (
            <motion.div
              key={app.id}
              className="relative group flex flex-col items-center gap-1"
              whileHover={{ y: -10, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Tooltip (Hidden on mobile) */}
              <span className="hidden md:block absolute -top-10 px-2 py-1 bg-black border border-white/20 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {app.title}
              </span>

              {/* Icon Container */}
              <button
                onClick={() => handleAppClick(app.id)}
                className={`
                  w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0
                  ${isActive && !isMinimized
                    ? 'bg-cursed-cyan text-black shadow-[0_0_15px_#00f0ff]' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'}
                  ${isMinimized ? 'opacity-70 grayscale-[50%]' : ''}
                `}
              >
                <div className="scale-90 md:scale-100">
                    {app.icon}
                </div>
              </button>

              {/* Active Dot indicator */}
              <div 
                className={`
                  w-1 h-1 rounded-full transition-all duration-300
                  ${isOpen ? 'bg-cursed-cyan scale-100' : 'bg-transparent scale-0'}
                `} 
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;