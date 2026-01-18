import React, { useState } from 'react';
import { MapPin, Mail, Github, Linkedin, Shield, FileText, X, Instagram, Gitlab, Copy, Check, Zap, Brain, Globe2 } from 'lucide-react';
import { PROFILE_DATA } from '../../../data/profile';
import { SYSTEM_ASSETS } from '../../../utils/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useOS } from '../../../context/OSContext';
import { LocalizedString } from '../../../types/content.types';

const Profile: React.FC = () => {
  const { language } = useOS();
  const [showCV, setShowCV] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getText = (content: LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language];
  };

  return (
    <div className="h-full flex flex-col font-sans text-gray-200 select-none relative overflow-hidden bg-[#050505]">
      
      {/* Background Tech Mesh */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ 
            backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
        }} 
      />

      {/* CV Modal Overlay */}
      <AnimatePresence>
        {showCV && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col p-4"
          >
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/20">
              <h3 className="text-cursed-cyan font-mono font-bold flex items-center gap-2">
                <FileText size={18} />
                CONFIDENTIAL_FILE.PDF
              </h3>
              <button 
                onClick={() => setShowCV(false)}
                className="p-1 hover:bg-white/10 rounded-full text-gray-400 hover:text-cursed-red transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 bg-[#1a1a1a] rounded border border-white/10 relative flex items-center justify-center">
              <iframe 
                src={PROFILE_DATA.cvUrl} 
                className="w-full h-full opacity-50 grayscale"
                title="CV Preview"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="text-cursed-red border border-cursed-red px-4 py-2 font-mono text-xl -rotate-12 bg-black/80">
                    PREVIEW MODE
                 </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Grid */}
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        
        {/* Left Column: Avatar & ID */}
        <div className="md:w-1/3 bg-white/[0.02] border-r border-white/10 p-6 flex flex-col items-center justify-center relative overflow-hidden group shrink-0">
            {/* Animated Scanner Bar */}
            <motion.div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-cursed-cyan shadow-[0_0_15px_#00f0ff] z-20"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            />
            
            {/* Avatar Frame */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
                {/* Rotating Rings */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-cursed-cyan/30"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 rounded-full border border-dotted border-cursed-red/30"
                />
                
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-black relative z-10">
                    <img 
                        src={SYSTEM_ASSETS.PROFILE_PIC} 
                        alt="Profile" 
                        className="w-full h-full object-cover filter contrast-125 hover:scale-110 transition-transform duration-500" 
                    />
                </div>
                
                {/* ID Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-cursed-cyan text-cursed-cyan text-[10px] font-mono px-2 py-0.5 whitespace-nowrap z-20 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                    ID: 889-21-X
                </div>
            </div>

            {/* Name Block */}
            <div className="text-center space-y-1">
                <h2 className="text-2xl font-bold text-white tracking-tight leading-none">
                    {PROFILE_DATA.name}
                </h2>
                {PROFILE_DATA.japaneseName && (
                    <p className="text-sm text-gray-500 font-sans opacity-70">
                        {PROFILE_DATA.japaneseName}
                    </p>
                )}
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-cursed-red/10 border border-cursed-red/30 rounded text-[10px] text-cursed-red tracking-widest font-bold">
                    <Shield size={10} />
                    {PROFILE_DATA.grade}
                </div>
            </div>
            
            <div className="mt-6 w-full space-y-3">
                <div className="flex items-center gap-3 text-xs text-gray-400 bg-white/5 p-2 rounded border border-white/5">
                    <MapPin size={14} className="text-cursed-cyan" />
                    <span>{PROFILE_DATA.location}</span>
                </div>
                <div 
                    onClick={handleCopyEmail}
                    className="flex items-center justify-between gap-3 text-xs text-gray-400 bg-white/5 p-2 rounded border border-white/5 cursor-pointer hover:bg-white/10 hover:text-white transition-colors group/email"
                >
                    <div className="flex items-center gap-3 overflow-hidden">
                        <Mail size={14} className="text-cursed-cyan shrink-0" />
                        <span className="truncate">{PROFILE_DATA.email}</span>
                    </div>
                    {copiedEmail ? <Check size={12} className="text-green-500"/> : <Copy size={12} className="opacity-0 group-hover/email:opacity-100 transition-opacity"/>}
                </div>
            </div>
        </div>

        {/* Right Column: Stats & Data */}
        <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
            
            {/* Header Area */}
            <div className="mb-6 pb-4 border-b border-white/10 flex justify-between items-end">
                <div>
                    <h3 className="text-xs font-mono text-gray-500 mb-1">CURRENT CLASS</h3>
                    <h1 className="text-xl md:text-2xl font-bold text-white max-w-sm leading-tight">
                        {PROFILE_DATA.title}
                    </h1>
                </div>
                <div className="hidden md:block text-right">
                   <div className="text-[10px] text-cursed-cyan font-mono animate-pulse">SYSTEM_ONLINE</div>
                   <div className="text-[10px] text-gray-600 font-mono">SYNC_RATE: 99.9%</div>
                </div>
            </div>

            {/* Description / Bio */}
            <div className="mb-8 relative space-y-4">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-cursed-cyan to-transparent" />
                <p className="text-sm font-semibold text-white leading-relaxed font-sans">
                    {getText(PROFILE_DATA.tagline)}
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light text-justify">
                    {getText(PROFILE_DATA.bio)}
                </p>
            </div>

            {/* Skills Tags Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Hard Skills */}
                <div>
                    <h4 className="text-[10px] font-mono text-cursed-red mb-3 uppercase tracking-widest flex items-center gap-2">
                        <Zap size={10} /> Innate Techniques (Hard Skills)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {PROFILE_DATA.hardSkills.map((skill, idx) => (
                            <span key={idx} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded hover:text-cursed-cyan hover:border-cursed-cyan/30 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                 {/* Soft Skills */}
                 <div>
                    <h4 className="text-[10px] font-mono text-cursed-cyan mb-3 uppercase tracking-widest flex items-center gap-2">
                        <Brain size={10} /> Cursed Energy Control (Soft Skills)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {PROFILE_DATA.softSkills.map((skill, idx) => (
                            <span key={idx} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded hover:text-cursed-cyan hover:border-cursed-cyan/30 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Spoken Languages */}
            {PROFILE_DATA.languages && PROFILE_DATA.languages.length > 0 && (
                <div className="mb-8">
                    <h4 className="text-[10px] font-mono text-gray-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                        <Globe2 size={10} /> Communications (Spoken Languages)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {PROFILE_DATA.languages.map((lang, idx) => (
                             <div key={idx} className="bg-white/5 border border-white/10 rounded p-2 flex flex-col">
                                 <span className="text-xs font-bold text-gray-200">{lang.language}</span>
                                 <span className="text-[10px] text-gray-500">{lang.proficiency}</span>
                             </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Stats Grid (JJK Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {PROFILE_DATA.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-[10px] font-mono tracking-wider">
                            <span className="text-gray-400 uppercase">{stat.label}</span>
                            <span style={{ color: stat.color }}>{stat.value}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-800 rounded-sm overflow-hidden relative">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${stat.value}%` }}
                                transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "circOut" }}
                                className="h-full relative"
                                style={{ backgroundColor: stat.color }}
                            >
                                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white opacity-50 shadow-[0_0_10px_white]" />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Action Matrix (Socials) */}
            <div className="mt-auto">
                <h4 className="text-[10px] font-mono text-gray-500 mb-3 uppercase tracking-widest border-b border-white/5 pb-1 w-fit">
                    Summoning Protocols
                </h4>
                <div className="grid grid-cols-2 gap-3">
                    <a href={PROFILE_DATA.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all group">
                        <Github size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                        <span className="text-xs font-bold text-gray-300 group-hover:text-white">GitHub</span>
                    </a>
                    
                    <a href={PROFILE_DATA.socials.gitlab} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded bg-[#fc6d26]/10 border border-[#fc6d26]/20 hover:bg-[#fc6d26]/20 hover:border-[#fc6d26]/40 hover:shadow-[0_0_15px_rgba(252,109,38,0.2)] transition-all group">
                        <Gitlab size={18} className="text-[#fc6d26]" />
                        <span className="text-xs font-bold text-gray-300 group-hover:text-[#fc6d26]">GitLab</span>
                    </a>

                    <a href={PROFILE_DATA.socials.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded bg-[#E1306C]/10 border border-[#E1306C]/20 hover:bg-[#E1306C]/20 hover:border-[#E1306C]/40 hover:shadow-[0_0_15px_rgba(225,48,108,0.2)] transition-all group">
                        <Instagram size={18} className="text-[#E1306C]" />
                        <span className="text-xs font-bold text-gray-300 group-hover:text-[#E1306C]">Instagram</span>
                    </a>

                    <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40 hover:shadow-[0_0_15px_rgba(0,119,181,0.2)] transition-all group">
                        <Linkedin size={18} className="text-[#0077b5]" />
                        <span className="text-xs font-bold text-gray-300 group-hover:text-[#0077b5]">LinkedIn</span>
                    </a>
                </div>
            </div>

            {/* Footer / CV Button */}
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] text-gray-600 font-mono">ENC: AES-256 // SECURE</span>
                <button 
                    onClick={() => setShowCV(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-cursed-cyan/10 hover:bg-cursed-cyan/20 text-cursed-cyan text-xs font-bold border border-cursed-cyan/30 rounded transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                >
                    <FileText size={14} />
                    ACCESS FULL CV
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;