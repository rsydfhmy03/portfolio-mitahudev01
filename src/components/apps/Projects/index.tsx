import React, { useState, useMemo } from 'react';
import { Folder, FileCode, ChevronRight, ArrowLeft, ExternalLink, Github, Eye, Lock, Layers, Cpu, Cloud, Smartphone, Database, Building2, Calendar, PlayCircle, Brain, Radio, ChevronLeft, X } from 'lucide-react';
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
  { id: 'IoT', name: 'Internet of Things', icon: Radio },
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

  const handleCloseProject = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  // Carousel Navigation
  const nextMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
    }
  };

  const prevMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length);
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
        className="h-full flex flex-col bg-[#0a0a0a]"
      >
        {/* Detail Header */}
        <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-gradient-to-b from-cursed-cyan/5 to-transparent shrink-0">
          <button 
            onClick={handleCloseProject}
            className="flex items-center gap-2 px-3 py-2 text-xs text-cursed-cyan hover:text-white hover:bg-white/5 transition-all rounded border border-transparent hover:border-white/10"
          >
            <ArrowLeft size={14} />
            <span className="font-mono tracking-wider">BACK TO ARCHIVES</span>
          </button>
          
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 font-mono">
            <span className="text-gray-600">~/archives/</span>
            <ChevronRight size={12} />
            <span className="text-gray-500">{selectedProject.categories[0]}</span>
            <ChevronRight size={12} />
            <span className="text-cursed-cyan">{selectedProject.title.toLowerCase().replace(/ /g, '_')}</span>
          </div>

          <button 
            onClick={handleCloseProject}
            className="p-2 hover:bg-white/5 rounded transition-colors"
          >
            <X size={16} className="text-gray-500 hover:text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Enhanced Media Carousel */}
          <div className="relative w-full bg-black border-b border-white/10">
            <div className="relative aspect-video max-h-[600px] bg-gradient-to-br from-black via-[#0a0a0a] to-black">
              {/* Main Media Display */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                {isVideo ? (
                  <iframe 
                    src={currentMedia.url} 
                    title="Project Video"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                ) : (
                  <img 
                    src={currentMedia.url || "https://placehold.co/800x400/121212/00f0ff?text=NO+SIGNAL"} 
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  />
                )}
              </div>

              {/* Navigation Arrows */}
              {selectedProject.media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-cursed-cyan/20 border border-white/10 hover:border-cursed-cyan/40 rounded-lg backdrop-blur-sm transition-all group z-10"
                  >
                    <ChevronLeft size={20} className="text-white group-hover:text-cursed-cyan" />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-cursed-cyan/20 border border-white/10 hover:border-cursed-cyan/40 rounded-lg backdrop-blur-sm transition-all group z-10"
                  >
                    <ChevronRight size={20} className="text-white group-hover:text-cursed-cyan" />
                  </button>
                </>
              )}

              {/* Media Counter */}
              {selectedProject.media.length > 1 && (
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-white font-mono z-10">
                  {currentMediaIndex + 1} / {selectedProject.media.length}
                </div>
              )}

              {/* Caption */}
              {currentMedia.caption && (
                <div className="absolute top-4 right-4 max-w-xs px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-white z-10">
                  {currentMedia.caption}
                </div>
              )}

              {/* Dot Indicators */}
              {selectedProject.media.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {selectedProject.media.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentMediaIndex(idx)}
                      className={`transition-all rounded-full ${
                        idx === currentMediaIndex 
                          ? 'bg-cursed-cyan w-6 h-2' 
                          : 'bg-white/30 hover:bg-white/60 w-2 h-2'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {selectedProject.media.length > 1 && (
              <div className="bg-[#0a0a0a] border-t border-white/10 p-4">
                <div className="flex gap-3 overflow-x-auto no-scrollbar max-w-5xl mx-auto">
                  {selectedProject.media.map((m, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentMediaIndex(idx)}
                      className={`
                        relative shrink-0 w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all
                        ${currentMediaIndex === idx 
                          ? 'border-cursed-cyan scale-105 opacity-100' 
                          : 'border-white/10 hover:border-white/30 opacity-50 hover:opacity-80'
                        }
                      `}
                    >
                      {m.type === 'video' ? (
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                          <PlayCircle size={24} className="text-white" />
                        </div>
                      ) : (
                        <img src={m.url} className="w-full h-full object-cover" alt={`Thumbnail ${idx + 1}`} />
                      )}
                      {currentMediaIndex === idx && (
                        <div className="absolute inset-0 bg-cursed-cyan/10" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Title & Metadata */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedProject.categories.map(cat => (
                      <span key={cat} className="px-3 py-1 rounded-full bg-cursed-cyan/10 border border-cursed-cyan/30 text-[10px] text-cursed-cyan uppercase tracking-wider font-mono">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {selectedProject.title}
                  </h1>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    {selectedProject.association && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="p-1.5 bg-white/5 rounded border border-white/10">
                          <Building2 size={14} />
                        </div>
                        <span className="font-medium">{selectedProject.association}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="p-1.5 bg-white/5 rounded border border-white/10">
                        <Calendar size={14} />
                      </div>
                      <span className="font-mono text-xs">{selectedProject.date}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pb-6 border-b border-white/10">
                  {selectedProject.demoLink && (
                    <a 
                      href={selectedProject.demoLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 bg-cursed-cyan hover:bg-white text-black font-bold text-sm rounded-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                    >
                      <ExternalLink size={16} /> 
                      {selectedProject.demoLink.includes('play.google') ? 'VIEW ON PLAY STORE' : 'LIVE DEMO'}
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a 
                      href={selectedProject.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-sm rounded-lg transition-all border border-white/10 hover:border-white/30"
                    >
                      <Github size={16} /> SOURCE CODE
                    </a>
                  )}
                  {selectedProject.githubLink2 && (
                    <a 
                      href={selectedProject.githubLink2} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-sm rounded-lg transition-all border border-white/10 hover:border-white/30"
                    >
                      <Github size={16} /> SOURCE CODE 2
                    </a>
                  )}
                  {selectedProject.isConfidential && (
                    <div className="flex items-center gap-2 px-6 py-3 bg-cursed-red/10 text-cursed-red font-bold text-sm rounded-lg border border-cursed-red/30 cursor-not-allowed">
                      <Lock size={16} /> PRIVATE / CONFIDENTIAL
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-cursed-cyan uppercase tracking-widest text-xs mb-4 font-bold flex items-center gap-2">
                    <div className="w-1 h-4 bg-cursed-cyan rounded" />
                    MISSION REPORT
                  </h3>
                  <div className="prose prose-invert prose-sm max-w-none">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedProject.fullDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Tech Stack */}
                <div className="p-5 bg-[#0f0f0f] border border-white/10 rounded-xl">
                  <h3 className="text-gray-400 uppercase tracking-widest text-xs mb-4 font-bold flex items-center gap-2">
                    <Cpu size={14} className="text-cursed-cyan" />
                    TECH STACK
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs px-3 py-1.5 bg-black/50 border border-white/10 text-gray-300 rounded-lg hover:text-cursed-cyan hover:border-cursed-cyan/30 transition-all font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="p-5 bg-gradient-to-br from-cursed-cyan/5 to-transparent border border-cursed-cyan/20 rounded-xl">
                  <h3 className="text-cursed-cyan uppercase tracking-widest text-xs mb-4 font-bold">
                    PROJECT INFO
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className="text-white font-mono">{selectedProject.isConfidential ? 'Private' : 'Public'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Category:</span>
                      <span className="text-white font-mono">{selectedProject.categories[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Media:</span>
                      <span className="text-white font-mono">{selectedProject.media.length} items</span>
                    </div>
                  </div>
                </div>
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
      <div className="w-full md:w-64 bg-gradient-to-b from-black/40 to-transparent border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col p-3 gap-2 overflow-x-auto no-scrollbar shrink-0">
        <div className="hidden md:flex items-center gap-2 px-3 py-3 mb-2 border-b border-white/10">
          <Folder size={16} className="text-cursed-cyan" />
          <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">Domains</span>
        </div>
        {CATEGORIES.map((cat) => {
          const count = cat.id === 'All' ? PROJECTS_DATA.length : PROJECTS_DATA.filter(p => p.categories.includes(cat.id)).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                group relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all whitespace-nowrap font-mono
                ${activeCategory === cat.id 
                  ? 'bg-gradient-to-r from-cursed-cyan/10 to-transparent text-white border border-cursed-cyan/30' 
                  : 'text-gray-500 hover:bg-white/5 hover:text-gray-300 border border-transparent hover:border-white/10'
                }
              `}
            >
              {activeCategory === cat.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-cursed-cyan rounded-r" />
              )}
              <cat.icon size={16} className={activeCategory === cat.id ? 'text-cursed-cyan' : 'text-gray-600'} />
              <span className="flex-1 text-left">{cat.name}</span>
              <span className={`text-xs font-mono ${activeCategory === cat.id ? 'text-cursed-cyan' : 'text-gray-600'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        {/* Breadcrumb */}
        <div className="h-12 shrink-0 border-b border-white/10 flex items-center justify-between px-4 bg-gradient-to-b from-cursed-cyan/5 to-transparent">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
            <span className="text-gray-600">~</span>
            <ChevronRight size={14} />
            <span>archives</span>
            <ChevronRight size={14} />
            <span className="text-cursed-cyan">{activeCategory}</span>
          </div>
          <div className="text-xs text-gray-600 font-mono">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Project Grid */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 max-w-[1800px] mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.03 }}
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  className="group relative bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] rounded-xl border border-white/5 hover:border-cursed-cyan/40 overflow-hidden cursor-pointer transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cursed-cyan/0 via-cursed-cyan/5 to-cursed-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative p-5 flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-white/10 group-hover:border-cursed-cyan/30 shadow-inner transition-colors">
                        <FileCode size={22} className="text-gray-500 group-hover:text-cursed-cyan transition-colors" />
                      </div>
                      {project.isConfidential && (
                        <div className="p-2 bg-cursed-red/10 border border-cursed-red/30 rounded-lg">
                          <Lock size={14} className="text-cursed-red" />
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-gray-200 group-hover:text-white mb-2 font-mono line-clamp-1">
                        {project.title}
                      </h4>
                      
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.categories.slice(0, 2).map(cat => (
                          <span 
                            key={cat} 
                            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 font-mono"
                          >
                            {cat}
                          </span>
                        ))}
                        {project.categories.length > 2 && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500 font-mono">
                            +{project.categories.length - 2}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <span className="text-[10px] text-gray-600 font-mono">{project.date}</span>
                      <div className="flex items-center gap-1 text-[10px] text-cursed-cyan bg-cursed-cyan/10 px-2 py-1 rounded border border-cursed-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye size={10} /> 
                        <span className="font-mono">INSPECT</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;