import React, { useState } from 'react';
import { MapPin, Mail, Github, Linkedin, Shield, FileText, X, Instagram, Gitlab, Copy, Check, Zap, Brain, Globe2, Sparkles, Code2 } from 'lucide-react';
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
    <div className="h-full flex flex-col bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(6, 182, 212) 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cursed-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cursed-red/5 rounded-full blur-[120px]" />
      </div>

      {/* CV Modal */}
      <AnimatePresence>
        {showCV && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4"
          >
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-cursed-cyan/30">
              <h3 className="text-cursed-cyan font-mono font-bold flex items-center gap-2">
                <FileText size={18} />
                CONFIDENTIAL_FILE.PDF
              </h3>
              <button 
                onClick={() => setShowCV(false)}
                className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-cursed-red transition-colors border border-transparent hover:border-cursed-red/30"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 bg-[#0f0f0f] rounded-lg border border-cursed-cyan/20 relative flex items-center justify-center overflow-hidden">
              <iframe 
                src={PROFILE_DATA.cvUrl} 
                className="w-full h-full opacity-50 grayscale"
                title="CV Preview"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-cursed-red border-2 border-cursed-red px-6 py-3 font-mono text-xl -rotate-12 bg-black/90 rounded-lg shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                  PREVIEW MODE
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Scrollable Content */}
      <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
          
          {/* Hero Section - Avatar + Quick Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-br from-[#0f0f0f] to-black border border-white/10 rounded-2xl overflow-hidden"
          >
            {/* Scanner Line Animation */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-[2px] bg-cursed-cyan shadow-[0_0_20px_#00f0ff] z-10"
              animate={{ left: ['-100%', '200%'] }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            />

            <div className="relative p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                
                {/* Avatar Section */}
                <div className="relative shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    {/* Rotating Rings */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent 0%, rgba(6,182,212,0.3) 50%, transparent 100%)'
                      }}
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-2 rounded-full"
                      style={{
                        background: 'conic-gradient(from 180deg, transparent 0%, rgba(255,0,0,0.2) 50%, transparent 100%)'
                      }}
                    />
                    
                    {/* Avatar Image */}
                    <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-cursed-cyan/30 bg-black shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                      <img 
                        src={SYSTEM_ASSETS.PROFILE_PIC} 
                        alt="Profile" 
                        className="w-full h-full object-cover filter contrast-125 hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    
                    {/* ID Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black border border-cursed-cyan text-cursed-cyan text-[10px] font-mono px-3 py-1 whitespace-nowrap shadow-[0_0_15px_rgba(0,240,255,0.4)] rounded">
                      ID: 889-21-X
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  {/* Name & Grade */}
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                      {PROFILE_DATA.name}
                    </h1>
                    {PROFILE_DATA.japaneseName && (
                      <p className="text-sm text-gray-500 mb-3">
                        {PROFILE_DATA.japaneseName}
                      </p>
                    )}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cursed-red/10 border border-cursed-red/30 rounded-lg">
                      <Shield size={14} className="text-cursed-red" />
                      <span className="text-xs text-cursed-red tracking-wider font-bold">
                        {PROFILE_DATA.grade}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="inline-block">
                    <div className="text-[10px] text-gray-500 font-mono tracking-wider mb-1">CURRENT CLASS</div>
                    <h2 className="text-lg md:text-xl font-bold text-white">
                      {PROFILE_DATA.title}
                    </h2>
                  </div>

                  {/* Quick Contact */}
                  <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">
                      <MapPin size={14} className="text-cursed-cyan" />
                      <span>{PROFILE_DATA.location}</span>
                    </div>
                    <button 
                      onClick={handleCopyEmail}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cursed-cyan/30 rounded-lg text-xs text-gray-400 hover:text-white transition-all group"
                    >
                      <Mail size={14} className="text-cursed-cyan" />
                      <span className="truncate max-w-[200px]">{PROFILE_DATA.email}</span>
                      {copiedEmail ? <Check size={12} className="text-green-500 shrink-0"/> : <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"/>}
                    </button>
                  </div>
                </div>

                {/* Status Indicator (Desktop) */}
                <div className="hidden lg:block shrink-0">
                  <div className="text-right space-y-1">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-2 h-2 bg-cursed-cyan rounded-full animate-pulse shadow-[0_0_10px_#00f0ff]" />
                      <span className="text-[10px] text-cursed-cyan font-mono">SYSTEM_ONLINE</span>
                    </div>
                    <div className="text-[10px] text-gray-600 font-mono">SYNC_RATE: 99.9%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-1 bg-gradient-to-r from-transparent via-cursed-cyan/50 to-transparent" />
          </motion.div>

          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-[#0f0f0f] to-black border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cursed-cyan via-cursed-cyan/50 to-transparent" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-cursed-cyan" />
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider">Mission Statement</h3>
              </div>
              
              <p className="text-base font-semibold text-white leading-relaxed">
                {getText(PROFILE_DATA.tagline)}
              </p>
              
              <p className="text-sm text-gray-400 leading-relaxed text-justify">
                {getText(PROFILE_DATA.bio)}
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Hard Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#0f0f0f] to-black border border-cursed-red/20 rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cursed-red/5 rounded-full blur-3xl group-hover:bg-cursed-red/10 transition-colors" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={14} className="text-cursed-red" />
                  <h3 className="text-xs font-mono text-cursed-red uppercase tracking-wider">
                    Innate Techniques
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {PROFILE_DATA.hardSkills.map((skill, idx) => (
                    <motion.span 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.02) }}
                      className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:text-cursed-red hover:border-cursed-red/30 hover:bg-cursed-red/5 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-gradient-to-br from-[#0f0f0f] to-black border border-cursed-cyan/20 rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cursed-cyan/5 rounded-full blur-3xl group-hover:bg-cursed-cyan/10 transition-colors" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Brain size={14} className="text-cursed-cyan" />
                  <h3 className="text-xs font-mono text-cursed-cyan uppercase tracking-wider">
                    Cursed Energy Control
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {PROFILE_DATA.softSkills.map((skill, idx) => (
                    <motion.span 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 + (idx * 0.02) }}
                      className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:text-cursed-cyan hover:border-cursed-cyan/30 hover:bg-cursed-cyan/5 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          {PROFILE_DATA.languages && PROFILE_DATA.languages.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#0f0f0f] to-black border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Globe2 size={14} className="text-gray-400" />
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  Communications
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {PROFILE_DATA.languages.map((lang, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.05) }}
                    className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-white/20 hover:bg-white/10 transition-all"
                  >
                    <span className="text-sm font-bold text-white">{lang.language}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-cursed-cyan rounded-full"
                          style={{ 
                            width: lang.proficiency === 'Native' ? '100%' : 
                                   lang.proficiency === 'Professional' ? '80%' : '60%' 
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-500">{lang.proficiency}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-gradient-to-br from-[#0f0f0f] to-black border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={16} className="text-cursed-cyan" />
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider">Power Levels</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {PROFILE_DATA.stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.05) }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-400 uppercase tracking-wider">{stat.label}</span>
                    <span style={{ color: stat.color }} className="font-bold">{stat.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800/50 rounded-full overflow-hidden relative border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.value}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (idx * 0.1), ease: "circOut" }}
                      className="h-full relative"
                      style={{ backgroundColor: stat.color }}
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white opacity-75 shadow-[0_0_10px_white]" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#0f0f0f] to-black border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
              Summoning Protocols
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <a 
                href={PROFILE_DATA.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all group"
              >
                <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-bold text-gray-300 group-hover:text-white">GitHub</span>
              </a>
              
              <a 
                href={PROFILE_DATA.socials.gitlab} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 p-4 rounded-xl bg-[#fc6d26]/5 border border-[#fc6d26]/20 hover:bg-[#fc6d26]/10 hover:border-[#fc6d26]/40 hover:shadow-[0_0_20px_rgba(252,109,38,0.2)] transition-all group"
              >
                <Gitlab size={20} className="text-[#fc6d26]" />
                <span className="text-sm font-bold text-gray-300 group-hover:text-[#fc6d26]">GitLab</span>
              </a>

              <a 
                href={PROFILE_DATA.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 p-4 rounded-xl bg-[#E1306C]/5 border border-[#E1306C]/20 hover:bg-[#E1306C]/10 hover:border-[#E1306C]/40 hover:shadow-[0_0_20px_rgba(225,48,108,0.2)] transition-all group"
              >
                <Instagram size={20} className="text-[#E1306C]" />
                <span className="text-sm font-bold text-gray-300 group-hover:text-[#E1306C]">Instagram</span>
              </a>

              <a 
                href={PROFILE_DATA.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 p-4 rounded-xl bg-[#0077b5]/5 border border-[#0077b5]/20 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/40 hover:shadow-[0_0_20px_rgba(0,119,181,0.2)] transition-all group"
              >
                <Linkedin size={20} className="text-[#0077b5]" />
                <span className="text-sm font-bold text-gray-300 group-hover:text-[#0077b5]">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* CV Access Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-cursed-cyan/5 to-transparent border border-cursed-cyan/20 rounded-2xl"
          >
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Full Documentation Available</h3>
              <p className="text-xs text-gray-500 font-mono">ENC: AES-256 // SECURE PROTOCOL</p>
            </div>
            <button 
              onClick={() => setShowCV(true)}
              className="flex items-center gap-2 px-6 py-3 bg-cursed-cyan hover:bg-white text-black font-bold text-sm rounded-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
            >
              <FileText size={16} />
              ACCESS FULL CV
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;