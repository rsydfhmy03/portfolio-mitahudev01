import React from 'react';
import { CERTIFICATIONS_DATA } from '../../data/certifications';
import { Medal, Calendar, Building2, FileText, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-[#0a0a0a]">
      {/* Header */}
      <div className="p-4 text-center border-b border-white/10 bg-gradient-to-b from-cursed-cyan/5 to-transparent shrink-0">
        <h2 className="text-xl font-bold text-white mb-1 tracking-tight">Grade 1 Sorcerer</h2>
        <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">Honors & Awards</span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-4">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={cert.id} 
              className="group bg-[#0f0f0f] rounded-lg border border-white/10 hover:border-cursed-cyan/50 overflow-hidden transition-all relative"
            >
              {/* Cursed Glow Effect on Hover */}
              <div className="absolute inset-0 bg-cursed-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex flex-col md:flex-row min-h-[160px]">
                {/* Image Section */}
                <div className={`
                    relative overflow-hidden bg-black shrink-0
                    ${cert.orientation === 'landscape' ? 'w-full md:w-1/3 h-48 md:h-auto' : 'w-full md:w-1/4 h-64 md:h-auto'}
                `}>
                    <img 
                        src={cert.image} 
                        alt={cert.name} 
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-5 flex flex-col justify-center relative z-10">
                    {/* Header Info */}
                    <div className="mb-3">
                         <div className="flex items-center gap-2 mb-1.5">
                            <div className="p-1 bg-cursed-cyan/10 rounded text-cursed-cyan">
                                <Medal size={14} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{cert.issuer}</span>
                        </div>
                        <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-cursed-cyan transition-colors">
                            {cert.name}
                        </h3>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1.5 mb-3">
                         {cert.association && (
                            <div className="flex items-center gap-2 text-gray-400 text-xs">
                                <Building2 size={12} />
                                <span>{cert.association}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
                            <Calendar size={12} />
                            <span>Issued: {cert.date}</span>
                        </div>
                    </div>

                    {/* Description */}
                    {cert.description && (
                        <p className="text-sm text-gray-300 leading-relaxed mb-4 border-l-2 border-white/10 pl-3">
                            {cert.description}
                        </p>
                    )}

                    {/* Media/Attachments */}
                    {cert.media && cert.media.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {cert.media.map((media, idx) => (
                                <a 
                                    key={idx}
                                    href={media.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cursed-cyan/30 rounded text-xs text-gray-300 hover:text-white transition-all group/btn"
                                >
                                    {media.type === 'pdf' ? <FileText size={12} /> : <ImageIcon size={12} />}
                                    <span>{media.title}</span>
                                    <ExternalLink size={10} className="opacity-50 group-hover/btn:opacity-100" />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Certifications;