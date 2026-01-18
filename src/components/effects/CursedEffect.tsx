import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Click {
  id: number;
  x: number;
  y: number;
}

const CursedEffect: React.FC = () => {
  const [clicks, setClicks] = useState<Click[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      // Cleanup after animation
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id));
      }, 600);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      <AnimatePresence>
        {clicks.map((click) => (
          <React.Fragment key={click.id}>
            {/* Core Flash - Black Flash aesthetic */}
            <motion.div
              initial={{ opacity: 1, scale: 0, x: click.x, y: click.y }}
              animate={{ opacity: 0, scale: 2.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute w-4 h-4 -ml-2 -mt-2 rounded-full bg-black border border-cursed-red shadow-[0_0_30px_#ff003c] z-10"
            />
            
            {/* Cyan Ripple */}
            <motion.div
              initial={{ opacity: 0.8, scale: 0.2, x: click.x, y: click.y, rotate: 0 }}
              animate={{ opacity: 0, scale: 3, rotate: 90 }}
              transition={{ duration: 0.4 }}
              className="absolute w-10 h-10 -ml-5 -mt-5 border border-cursed-cyan/80 rounded-sm shadow-[0_0_15px_#00f0ff]"
            />

            {/* Jagged Sparks */}
            {[...Array(6)].map((_, i) => (
               <motion.div
                key={i}
                initial={{ opacity: 1, x: click.x, y: click.y, scale: 0 }}
                animate={{ 
                    opacity: 0, 
                    x: click.x + (Math.random() - 0.5) * 150, 
                    y: click.y + (Math.random() - 0.5) * 150,
                    scale: Math.random() * 1.5 
                }}
                transition={{ duration: 0.3, ease: "circOut" }}
                className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-cursed-red shadow-[0_0_5px_#ff003c]' : 'bg-cursed-cyan shadow-[0_0_5px_#00f0ff]'}`}
               />
            ))}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursedEffect;
