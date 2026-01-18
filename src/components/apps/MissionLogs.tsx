import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Briefcase, GraduationCap, MapPin, Calendar, FileText, Image as ImageIcon, ExternalLink, Users } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/logs';
import { Experience } from '../../types/content.types';

const MissionLogs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'organization'>('work');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredLogs = EXPERIENCE_DATA.filter(log => log.category === activeTab);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getThemeColor = (category: string) => {
      switch(category) {
          case 'work': return 'text-cursed-cyan';
          case 'education': return 'text-cursed-red';
          case 'organization': return 'text-purple-400';
          default: return 'text-gray-200';
      }
  };

  const getBorderColor = (category: string) => {
    switch(category) {
        case 'work': return 'border-cursed-cyan';
        case 'education': return 'border-cursed-red';
        case 'organization': return 'border-purple-400';
        default: return 'border-gray-700';
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#050505] font-sans text-gray-200">
      
      {/* Tab Header */}
      <div className="flex border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-20">
        <button
          onClick={() => setActiveTab('work')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs md:text-sm font-bold tracking-widest transition-all ${
            activeTab === 'work' 
              ? 'bg-cursed-cyan/10 text-cursed-cyan border-b-2 border-cursed-cyan' 
              : 'text-gray-500 hover:text-white hover:bg-white/5'
          }`}
        >
          <Briefcase size={14} />
          <span className="hidden sm:inline">GRADE 1</span> MISSIONS
        </button>
        <div className="w-[1px] bg-white/10" />
        <button
          onClick={() => setActiveTab('education')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs md:text-sm font-bold tracking-widest transition-all ${
            activeTab === 'education' 
              ? 'bg-cursed-red/10 text-cursed-red border-b-2 border-cursed-red' 
              : 'text-gray-500 hover:text-white hover:bg-white/5'
          }`}
        >
          <GraduationCap size={16} />
          TRAINING <span className="hidden sm:inline">ARCS</span>
        </button>
        <div className="w-[1px] bg-white/10" />
         <button
          onClick={() => setActiveTab('organization')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs md:text-sm font-bold tracking-widest transition-all ${
            activeTab === 'organization' 
              ? 'bg-purple-500/10 text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-500 hover:text-white hover:bg-white/5'
          }`}
        >
          <Users size={16} />
          CLANS / ALLIANCES
        </button>
      </div>

      {/* List Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 md:p-4 space-y-3">
        {filteredLogs.map((log) => {
          const isExpanded = expandedId === log.id;
          const themeColor = getThemeColor(activeTab);
          const borderColor = getBorderColor(activeTab);
          // bgHover constructed dynamically requires full utility classes in config or inline style, using dynamic template string for border color in hover might be tricky with tailwind JIT if not predefined.
          // Using style for dynamic border color on hover or just simple hover class
          
          return (
            <motion.div
              layout
              key={log.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`
                rounded-lg border border-white/5 bg-[#0f0f0f] overflow-hidden transition-all duration-300
                ${isExpanded ? `border-opacity-50 ${borderColor}` : `hover:border-opacity-30 hover:${borderColor}`}
              `}
            >
              {/* Header */}
              <div 
                onClick={() => toggleExpand(log.id)}
                className="p-3 md:p-4 flex gap-3 md:gap-4 cursor-pointer relative group"
              >
                {/* Logo Section */}
                <div className="shrink-0 pt-1">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded bg-white flex items-center justify-center overflow-hidden border border-white/10">
                      {log.logo ? (
                          <img src={log.logo} alt={log.company} className="w-full h-full object-contain p-1" onError={(e) => {
                              // Fallback to initial if image fails
                              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${log.company.replace(/ /g, '+')}&background=000&color=fff`;
                          }}/>
                      ) : (
                          <Briefcase size={20} className="text-black" />
                      )}
                   </div>
                </div>

                {/* Main Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`font-bold text-sm md:text-base text-white group-hover:${themeColor} transition-colors truncate pr-2`}>
                        {log.role}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400 font-medium">{log.company}</p>
                    </div>
                    {isExpanded ? <ChevronDown size={16} className="text-gray-500" /> : <ChevronRight size={16} className="text-gray-500" />}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-[10px] md:text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} /> {log.period}
                    </span>
                    {log.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={10} /> {log.location}
                      </span>
                    )}
                     <span className={`px-1.5 py-0.5 rounded border text-[9px] uppercase tracking-wider ${
                        log.status === 'ACTIVE' 
                        ? 'border-green-500/50 text-green-400 bg-green-500/10' 
                        : 'border-white/10 text-gray-600'
                    }`}>
                        {log.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5 bg-black/20"
                  >
                    <div className="p-4 pl-[4.5rem] md:pl-[5rem]">
                      {/* Description */}
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed whitespace-pre-line mb-4 border-l-2 border-white/10 pl-3">
                        {log.description}
                      </p>
                      
                      {/* Achievements */}
                      {log.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-mono">Mission Objectives</h4>
                          <ul className="space-y-1.5">
                            {log.achievements.map((item, i) => (
                              <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                                <span className={`mt-1.5 w-1 h-1 rounded-full ${themeColor.replace('text-', 'bg-')}`} />
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack */}
                      {log.techStack && log.techStack.length > 0 && (
                        <div className="mb-4">
                           <div className="flex flex-wrap gap-2">
                             {log.techStack.map(tech => (
                               <span key={tech} className={`text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300 hover:text-white group transition-colors cursor-default`}>
                                 <span className="opacity-50 mr-1 text-[8px]">&lt;/&gt;</span>
                                 {tech}
                               </span>
                             ))}
                           </div>
                        </div>
                      )}

                      {/* Media & Attachments */}
                      {log.media && log.media.length > 0 && (
                        <div>
                          <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-mono flex items-center gap-2">
                            <ImageIcon size={10} /> Evidence / Artifacts
                          </h4>
                          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {log.media.map((item, idx) => (
                              <a 
                                key={idx}
                                href={item.url}
                                target="_blank" 
                                rel="noreferrer"
                                className="group relative w-24 h-24 md:w-32 md:h-20 bg-black rounded border border-white/10 overflow-hidden shrink-0 cursor-pointer hover:border-white/30 transition-all"
                              >
                                {item.type === 'image' || item.type === 'link' ? (
                                    <img 
                                      src={item.thumbnail || 'https://placehold.co/400x300/121212/333?text=LINK'} 
                                      alt={item.title} 
                                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <FileText size={24} className="text-gray-500 mb-1" />
                                        <span className="text-[8px] text-gray-500">PDF</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-1.5">
                                  <span className="text-[9px] text-white font-medium truncate w-full">{item.title}</span>
                                </div>
                                {item.url !== '#' && (
                                    <div className="absolute top-1 right-1 p-0.5 bg-black/60 rounded text-white opacity-0 group-hover:opacity-100">
                                        <ExternalLink size={10} />
                                    </div>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionLogs;