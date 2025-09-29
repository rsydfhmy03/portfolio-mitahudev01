import { Experience } from "@/types";
import React from "react";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="p-6 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500">
      <p className="mb-2 text-sm font-semibold text-indigo-400">
        {experience.period}
      </p>
      <h3 className="text-lg font-bold text-white">{experience.role}</h3>
      <p className="mb-4 text-base font-normal text-gray-400">
        {experience.company}
      </p>
      <ul className="space-y-2 text-gray-400 list-disc list-inside">
        {experience.descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;