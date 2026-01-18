import React, { useState, useMemo } from 'react';
import { Folder, FileCode, ChevronRight, ArrowLeft, ExternalLink, Github, Eye, Lock, Layers, Cpu, Cloud, Smartphone, Database, Building2, Calendar, PlayCircle, Brain, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../../../data/projects';
import { Project, ProjectCategory } from '../../../types/content.types';

const CATEGORIES: { id: ProjectCategory; name: string; icon: any }[] = [
  { id: 'All', name: 'All Archives', icon: Folder },
  { id: 'Backend', name: 'Backend', icon: Database },
  { id: 'Frontend', name: 'Frontend', icon: Layers },
  { id: 'Mobile', name: 'Mobile', icon: Smartphone },
  { id: 'AI/ML', name: 'AI / Deep Learning', icon: Brain },
  { id: 'Cloud', name: 'Cloud Computing', icon: Cloud },
  { id: 'IoT', name: 'Internet of Things', icon: Radio }, // Using Radio as generic for IoT
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter(p => p.categories.includes(activeCategory));
  }, [activeCategory]);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
  };

  // Gallery Navigation
  const nextMedia = () => {
    if (selectedProject) {
        setCurrentMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
    }
  };

  if (selectedProject) {
    const currentMedia = selectedProject.media[currentMediaIndex];
    const isVideo = currentMedia?.type === 'video';

    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="h-full flex flex-col bg-[#0a0a0a] font-mono"
      >
        {/* Detail Header */}
        <div className="h-12 border-b border-white/10 flex items-center px-4 gap-4 bg-white/5 shrink-0">
          <button 
            onClick={() => setSelectedProject(null)}
            className="flex items-center gap-2 text-xs text-cursed-cyan hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft size={14} />
            Back to Archives
          </button>
          <div className="h-4 w-[1px] bg-white/10" />
          <span className="text-gray-400 text-xs truncate hidden md:block">
            archives / {selectedProject.categories[0]} / {selectedProject.title.toLowerCase().replace(/ /g, '_')}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
            
          {/* Media Gallery Stage */}
          <div className="relative w-full aspect-video md:h-[400px] bg-black border-b border-white/10 group">
             {isVideo ? (
                 <iframe 
                    src={currentMedia.url} 
                    title="Project Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                 />
             ) : (
                <img 
                    src={currentMedia.url || "https://placehold.co/800x400/121212/00f0ff?text=NO+SIGNAL"} 
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                />
             )}
             
             {/* Gallery Controls (if multiple) */}
             {selectedProject.media.length > 1 && (
                 <>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {selectedProject.media.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setCurrentMediaIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentMediaIndex ? 'bg-cursed-cyan w-4' : 'bg-white/50 hover:bg-white'}`}
                            />
                        ))}
                    </div>
                    {/* Caption Overlay */}
                    {currentMedia.caption && (
                        <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded text-xs text-white border border-white/10 backdrop-blur-sm">
                            {currentMedia.caption}
                        </div>
                    )}
                 </>
             )}
          </div>

          <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-8">
            
            {/* Title & Metadata */}
            <div>
                <div className="flex flex-wrap gap-2 mb-3">
                    {selectedProject.categories.map(cat => (
                         <span key={cat} className="px-2 py-0.5 rounded-full border border-white/20 bg-white/5 text-[10px] text-gray-300 uppercase tracking-wider">
                            {cat}
                         </span>
                    ))}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    {selectedProject.title}
                </h1>
                
                {selectedProject.association && (
                    <div className="flex items-center gap-2 text-cursed-cyan text-xs md:text-sm font-bold mb-1">
                        <Building2 size={14} />
                        <span>{selectedProject.association}</span>
                    </div>
                )}
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Calendar size={12} />
                    <span>{selectedProject.date}</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 border-y border-white/10 py-6">
               {selectedProject.demoLink && (
                 <a href={selectedProject.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-cursed-cyan text-black font-bold text-xs rounded hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                   <ExternalLink size={14} /> 
                   {selectedProject.demoLink.includes('play.google') ? 'PLAY STORE' : 'LIVE DEMO'}
                 </a>
               )}
               {selectedProject.githubLink && (
                 <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-white/10 text-white font-bold text-xs rounded hover:bg-white/20 hover:border-white/50 transition-all border border-white/10">
                   <Github size={14} /> SOURCE CODE
                 </a>
               )}
               {selectedProject.isConfidential && (
                 <div className="flex items-center gap-2 px-6 py-2 bg-cursed-red/10 text-cursed-red font-bold text-xs rounded border border-cursed-red/30 cursor-not-allowed opacity-80">
                   <Lock size={14} /> PRIVATE / CONFIDENTIAL
                 </div>
               )}
            </div>

            {/* Description & Stack */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 prose prose-invert prose-sm max-w-none">
                    <h3 className="text-cursed-cyan uppercase tracking-widest text-xs mb-4 font-bold">
                        Mission Report
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
                        {selectedProject.fullDesc}
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-gray-500 uppercase tracking-widest text-xs mb-3 font-bold border-b border-white/10 pb-2">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.techStack.map(tech => (
                            <span key={tech} className="text-[11px] px-2 py-1 bg-[#0f0f0f] border border-white/10 text-gray-300 rounded hover:text-cursed-cyan hover:border-cursed-cyan/30 transition-colors">
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Thumbnail Strip (Navigation) */}
                    {selectedProject.media.length > 1 && (
                        <div>
                             <h3 className="text-gray-500 uppercase tracking-widest text-xs mb-3 font-bold border-b border-white/10 pb-2">
                                Gallery
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                                {selectedProject.media.map((m, idx) => (
                                    <div 
                                        key={idx} 
                                        onClick={() => setCurrentMediaIndex(idx)}
                                        className={`
                                            aspect-video rounded overflow-hidden cursor-pointer border
                                            ${currentMediaIndex === idx ? 'border-cursed-cyan opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}
                                        `}
                                    >
                                        {m.type === 'video' ? (
                                            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                                                <PlayCircle size={20} className="text-white" />
                                            </div>
                                        ) : (
                                            <img src={m.url} className="w-full h-full object-cover" alt="thumb" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="h-full flex flex-col md:flex-row bg-[#0a0a0a]">
      {/* Sidebar / Filters */}
      <div className="w-full md:w-56 bg-black/20 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col p-2 gap-1 overflow-x-auto no-scrollbar shrink-0">
        <div className="hidden md:block text-xs text-gray-500 font-mono px-2 py-2 mb-2 tracking-widest">DOMAINS</div>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              flex-1 md:flex-none flex items-center justify-center md:justify-start gap-3 px-3 py-2 rounded text-xs md:text-sm transition-colors whitespace-nowrap font-mono
              ${activeCategory === cat.id ? 'bg-white/10 text-white border border-white/10' : 'text-gray-500 hover:bg-white/5 hover:text-gray-300 border border-transparent'}
            `}
          >
            <cat.icon size={14} className={activeCategory === cat.id ? 'text-cursed-cyan' : ''} />
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        {/* Breadcrumb */}
        <div className="h-10 shrink-0 border-b border-white/10 flex items-center px-4 gap-2 text-sm text-gray-500 bg-black/40 font-mono">
          <span>root</span>
          <ChevronRight size={14} />
          <span>archives</span>
          <ChevronRight size={14} />
          <span className="text-cursed-cyan">{activeCategory}</span>
        </div>

        {/* Project Grid */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 overflow-y-auto custom-scrollbar content-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                onClick={() => handleSelectProject(project)}
                className="group relative p-4 rounded-lg border border-white/5 hover:border-cursed-cyan/50 hover:bg-white/[0.03] flex flex-col gap-3 cursor-pointer transition-all bg-[#0f0f0f]"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded flex items-center justify-center border border-white/5 group-hover:border-cursed-cyan/30 shadow-inner">
                    <FileCode size={20} className="text-gray-500 group-hover:text-cursed-cyan transition-colors" />
                  </div>
                  {project.isConfidential && <Lock size={12} className="text-cursed-red" />}
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-gray-200 group-hover:text-white truncate font-mono">{project.title}</h4>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                      {project.categories.slice(0, 3).map(cat => (
                          <span key={cat} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-gray-400">{cat}</span>
                      ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">{project.shortDesc}</p>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="flex items-center gap-1 text-[10px] text-cursed-cyan bg-cursed-cyan/10 px-2 py-1 rounded border border-cursed-cyan/20">
                    <Eye size={10} /> INSPECT
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;