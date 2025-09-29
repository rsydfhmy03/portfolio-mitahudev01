'use client';

import React from 'react';
// import { personalInfo } from '@/data/portfolioData'; // <-- Impor data

const HeroSection = () => {
  const personalInfo = {
    name: "Fahmy Rosyadi",
    title: "Full-Stack Developer & Cloud Enthusiast",
    introduction: "Lulusan Cum Laude dengan passion dalam membangun solusi teknis yang efisien dari hulu ke hilir. Berpengalaman dalam pengembangan aplikasi full-stack dan infrastruktur cloud."
  };

  return (
    <section
      id="home" 
      className="flex items-center justify-center min-h-screen text-center"
    >
      <div className="max-w-2xl px-4">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {personalInfo.name}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          {personalInfo.title}
        </p>
        <p className="mt-4 text-base text-gray-400">
          {personalInfo.introduction}
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;