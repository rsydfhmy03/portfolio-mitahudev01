import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <div className="h-full p-4 md:p-6 overflow-y-auto custom-scrollbar">
      <div className="space-y-8">
        {SKILLS_DATA.map((category) => (
          <div key={category.id}>
            <div className="flex items-center gap-2 mb-4 border-b border-cursed-cyan/20 pb-2">
              <h3 className="text-cursed-cyan font-mono text-xs md:text-sm uppercase tracking-widest">
                {category.name}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {category.items.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 240, 255, 0.5)' }}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col items-center justify-center gap-3 transition-all group cursor-pointer relative overflow-hidden"
                >
                  {/* Cursed Energy Background Effect */}
                  <div className="absolute inset-0 bg-cursed-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 p-2 bg-black/40 rounded-full text-gray-300 group-hover:text-cursed-cyan transition-colors">
                    {skill.icon}
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-300 block mb-1">
                      {skill.name}
                    </span>
                    {/* Level Bar */}
                    <div className="w-12 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 10}%` }}
                        transition={{ duration: 1, delay: 0.1 * idx }}
                        className="h-full bg-cursed-cyan shadow-[0_0_5px_#00f0ff]"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
