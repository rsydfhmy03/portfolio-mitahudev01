'use client';

import { skills } from "@/data/portfolioData";
import { Skill } from "@/types";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

import SkillIcon from "../ui/SkillIcon"; 

const SkillsSection = () => {
  // Mengelompokkan skill berdasarkan kategori menggunakan useMemo untuk efisiensi
  const groupedSkills = useMemo(() => {
    return skills.reduce((acc, skill) => {
      const { category } = skill;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {} as Record<Skill['category'], Skill[]>);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-center text-white"
        >
          Teknologi & Keahlian
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(groupedSkills).map(([category, skillList]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="mb-4 text-xl font-semibold text-center text-indigo-400 md:text-left">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                {skillList.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700"
                  >
                    {/* Ikon akan muncul di sini */}
                    <SkillIcon name={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;