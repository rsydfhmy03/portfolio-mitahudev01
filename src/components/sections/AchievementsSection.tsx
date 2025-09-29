'use client';

import { certifications, awards } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-center text-white"
        >
          Sertifikasi & Penghargaan
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Kolom Sertifikasi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center mb-6 text-2xl font-semibold text-white">
              <BadgeCheck className="w-6 h-6 mr-3 text-indigo-400" />
              Sertifikasi
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <a href={cert.url} key={cert.title} target="_blank" rel="noopener noreferrer" className="block p-4 transition-colors bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700">
                  <p className="font-bold text-white">{cert.title}</p>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.issuedDate}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Kolom Penghargaan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center mb-6 text-2xl font-semibold text-white">
              <Award className="w-6 h-6 mr-3 text-amber-400" />
              Penghargaan
            </h3>
            <div className="space-y-4">
              {awards.map((award) => (
                <div key={award.title} className="p-4 bg-gray-800 border border-gray-700 rounded-lg">
                  <p className="font-bold text-white">{award.title}</p>
                  <p className="text-sm text-gray-400">{award.issuer}</p>
                  <p className="mt-2 text-sm text-gray-500">{award.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;