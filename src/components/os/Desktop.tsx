import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useOS } from '../../context/OSContext';
import BootScreen from './BootScreen';
import TopBar from './TopBar';
import Dock from './Dock';
import WindowFrame from './WindowFrame';
import CursedEffect from '../effects/CursedEffect';
import { APP_REGISTRY, SYSTEM_ASSETS } from '../../utils/constants';

const Desktop: React.FC = () => {
  const { isBooting } = useOS();
  const desktopRef = useRef<HTMLDivElement>(null);
  const [wallpaperError, setWallpaperError] = useState(false);

  if (isBooting) {
    return <BootScreen />;
  }

  return (
    <div className="h-screen w-screen bg-kogane-bg overflow-hidden relative font-sans text-gray-200 select-none">
      <CursedEffect />
      
      {/* Desktop Wallpaper */}
      <div className="absolute inset-0 z-0 bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            {!wallpaperError ? (
                <img 
                src={SYSTEM_ASSETS.WALLPAPER} 
                alt="Wallpaper" 
                fetchPriority="high"
                className="w-full h-full object-cover object-[center_20%] opacity-100 transition-opacity duration-700"
                onError={() => {
                    // Removed event object 'e' from console.warn to avoid circular JSON error
                    console.warn(`Wallpaper failed to load from: ${SYSTEM_ASSETS.WALLPAPER}`);
                    setWallpaperError(true);
                }}
                />
            ) : (
                // Fallback gradient if image fails (Cyberpunk purple/blue)
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
            )}
          </motion.div>
          
          {/* Overlay reduced slightly to make wallpaper more visible */}
          {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" /> */}
      </div>

      {/* Dynamic Animated Orbs */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-screen">
        <div className="absolute w-[500px] h-[500px] bg-cursed-cyan/20 rounded-full blur-[120px] -top-20 -left-20 animate-pulse-slow" />
        <div className="absolute w-[400px] h-[400px] bg-cursed-red/20 rounded-full blur-[150px] bottom-0 right-0 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <TopBar />

      {/* Main Desktop Area */}
      <div 
        ref={desktopRef}
        className="absolute top-8 bottom-0 left-0 right-0 z-10 overflow-hidden"
      >
        {APP_REGISTRY.map((app) => (
          <WindowFrame key={app.id} app={app} constraintRef={desktopRef} />
        ))}
      </div>

      <Dock />
    </div>
  );
};

export default Desktop;