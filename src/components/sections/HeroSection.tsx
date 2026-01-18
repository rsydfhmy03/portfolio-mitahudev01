'use client';

import React from 'react';
import { motion } from 'framer-motion'; 

const HeroSection = () => {
  const personalInfo = {
    name: "Fahmy Rosyadi",
    title: "Full-Stack Developer & Cloud Enthusiast",
    // introduction: "Lulusan Cum Laude dengan passion dalam membangun solusi teknis yang efisien dari hulu ke hilir. Berpengalaman dalam pengembangan aplikasi full-stack dan infrastruktur cloud."
    introduction : "Lulusan Terbaik (Distinction) Bangkit 2024 (Cloud Computing). Spesialis arsitektur backend yang scalable dan integrasi sistem."
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Jeda antar animasi anak-anaknya
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section 
      id="home"
      className="flex items-center justify-center min-h-screen text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-2xl px-4">
        <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {personalInfo.name}
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-gray-300">
          {personalInfo.title}
        </motion.p>
        <motion.p variants={itemVariants} className="mt-4 text-base text-gray-400">
          {personalInfo.introduction}
        </motion.p>
        <motion.div variants={itemVariants} className="flex items-center justify-center mt-10 gap-x-6">
          <a
            href="#projects"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Lihat Proyek Saya
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-white"
          >
            Hubungi Saya <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;