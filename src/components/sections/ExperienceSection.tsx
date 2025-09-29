'use client';

import { experiences } from "@/data/portfolioData";
import ExperienceCard from "../ui/ExperienceCard";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 text-white">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-center"
        >
          Perjalanan Profesional Saya
        </motion.h2>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>

          {/* Mapping Data Experience */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                {/* Dot on the timeline */}
                <div className="absolute left-1/2 top-1/2 z-10 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 rounded-full"></div>

                {/* Content Card */}
                <div className={`w-full px-4 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}>
                  <ExperienceCard experience={exp} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;