import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOS } from '../../context/OSContext';

const BootScreen: React.FC = () => {
  const { setBooting } = useOS();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 500));
      setStep(1); // "INITIALIZING BARRIER"
      await new Promise((r) => setTimeout(r, 600));
      setStep(2); // "LOADING CURSED ENERGY"
      await new Promise((r) => setTimeout(r, 750));
      setStep(3); // "KOGANE SYSTEM ONLINE"
      await new Promise((r) => setTimeout(r, 850));
      setBooting(false);
    };
    sequence();
  }, [setBooting]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono text-cursed-cyan"
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="w-80 space-y-4">
        <AnimatePresence>
          {step >= 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-between border-b border-cursed-cyan/30 pb-2"
            >
              <span>SYSTEM_BOOT</span>
              <span>v.1.0.4</span>
            </motion.div>
          )}
          {step >= 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-400"
            >
              &gt; INITIALIZING_BARRIER... <span className="text-green-500">OK</span>
            </motion.div>
          )}
          {step >= 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-400"
            >
              &gt; SYNCING_CURSED_TOOLS... <span className="text-green-500">OK</span>
            </motion.div>
          )}
          {step >= 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 text-center text-2xl font-bold tracking-widest text-cursed-red animate-pulse"
            >
              WELCOME_PLAYER
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-20 w-64 h-1 bg-gray-800 rounded overflow-hidden">
        <motion.div
          className="h-full bg-cursed-cyan shadow-[0_0_10px_#00f0ff]"
          initial={{ width: '0%' }}
          animate={{ width: step === 3 ? '100%' : `${step * 30}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default BootScreen;