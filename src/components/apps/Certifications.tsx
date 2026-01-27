import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../../data/certifications';
import { Medal, Calendar, Building2, FileText, Image as ImageIcon, ExternalLink, Award, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const expandedCert = CERTIFICATIONS_DATA.find(cert => cert.id === expandedId);

  return (
    <div className="h-full flex flex-col bg-[#0a0a0a]">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-gradient-to-b from-cursed-cyan/5 to-transparent shrink-0">
        <div className="flex items-center justify-center gap-3">
          <Award className="text-cursed-cyan" size={18} />
          <h2 className="text-xl font-bold text-white tracking-tight">Certifications & Awards</h2>
          <div className="px-2 py-1 bg-cursed-cyan/10 border border-cursed-cyan/20 rounded text-xs text-cursed-cyan font-mono">
            {CERTIFICATIONS_DATA.length}
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1400px] mx-auto">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setExpandedId(cert.id)}
              className="group relative bg-[#0f0f0f] border border-white/10 hover:border-cursed-cyan/40 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              {/* Image */}
              <div className="relative h-48 bg-black overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                
                {/* Expand Icon */}
                <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={14} className="text-cursed-cyan" />
                </div>

                {/* Issuer Badge */}
                <div className="absolute top-3 left-3">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur-sm border border-cursed-cyan/30 rounded-full">
                    <Medal size={10} className="text-cursed-cyan" />
                    <span className="text-[9px] font-bold text-cursed-cyan uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-bold text-base mb-2 line-clamp-2 group-hover:text-cursed-cyan transition-colors">
                  {cert.name}
                </h3>

                {cert.association && (
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <Building2 size={11} />
                    <span className="truncate">{cert.association}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
                  <Calendar size={11} />
                  <span>{cert.date}</span>
                </div>

                {cert.description && (
                  <p className="text-xs text-gray-400 mt-3 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                )}

                {cert.media && cert.media.length > 0 && (
                  <div className="flex items-center gap-1 mt-3 pt-3 border-t border-white/5">
                    <FileText size={11} className="text-cursed-cyan/60" />
                    <span className="text-[10px] text-gray-500">
                      {cert.media.length} attachment{cert.media.length > 1 ? 's' : ''}
                    </span>
                  </div>
                )}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-cursed-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expandedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-cursed-cyan/30 rounded-xl shadow-[0_0_60px_rgba(6,182,212,0.3)] overflow-hidden pointer-events-auto">
                {/* Close Button */}
                <button
                  onClick={() => setExpandedId(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 border border-white/20 hover:border-cursed-cyan/40 rounded-lg transition-all group"
                >
                  <X size={18} className="text-gray-400 group-hover:text-white" />
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/10">
                    <img
                      src={expandedCert.image}
                      alt={expandedCert.name}
                      className="max-w-full max-h-[400px] md:max-h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 overflow-y-auto custom-scrollbar">
                    <div className="p-6 md:p-8">
                      {/* Issuer */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cursed-cyan/10 border border-cursed-cyan/30 rounded-full mb-4">
                        <Medal size={14} className="text-cursed-cyan" />
                        <span className="text-xs font-bold text-cursed-cyan uppercase tracking-wider">
                          {expandedCert.issuer}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                        {expandedCert.name}
                      </h2>

                      {/* Metadata */}
                      <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                        {expandedCert.association && (
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/5 rounded border border-white/10">
                              <Building2 size={16} className="text-gray-400" />
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Organization</div>
                              <div className="text-sm text-white font-medium">{expandedCert.association}</div>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/5 rounded border border-white/10">
                            <Calendar size={16} className="text-gray-400" />
                          </div>
                          <div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Issue Date</div>
                            <div className="text-sm text-white font-mono">{expandedCert.date}</div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      {expandedCert.description && (
                        <div className="mb-6">
                          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Description</h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {expandedCert.description}
                          </p>
                        </div>
                      )}

                      {/* Media Attachments */}
                      {expandedCert.media && expandedCert.media.length > 0 && (
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Attachments</h3>
                          <div className="space-y-2">
                            {expandedCert.media.map((media, idx) => (
                              <a
                                key={idx}
                                href={media.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-cursed-cyan/10 border border-white/10 hover:border-cursed-cyan/30 rounded-lg transition-all group"
                              >
                                <div className="p-2 bg-white/5 group-hover:bg-cursed-cyan/10 rounded transition-colors">
                                  {media.type === 'pdf' ? (
                                    <FileText size={16} className="text-gray-400 group-hover:text-cursed-cyan" />
                                  ) : (
                                    <ImageIcon size={16} className="text-gray-400 group-hover:text-cursed-cyan" />
                                  )}
                                </div>
                                <span className="flex-1 text-sm text-gray-300 group-hover:text-white transition-colors">
                                  {media.title}
                                </span>
                                <ExternalLink size={14} className="text-gray-500 group-hover:text-cursed-cyan transition-colors" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;