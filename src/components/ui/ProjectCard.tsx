import { Project } from "@/types";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg group hover:border-indigo-500 hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="flex-grow mb-4 text-sm text-gray-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs text-indigo-300 bg-indigo-900/50 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center mt-auto space-x-4">
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 transition-colors hover:text-indigo-400">
            <Github className="w-5 h-5 mr-2" />
            Kode
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 transition-colors hover:text-indigo-400">
              <ExternalLink className="w-5 h-5 mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;