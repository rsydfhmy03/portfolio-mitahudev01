import React from 'react';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiAdonisjs, SiFastapi, SiLaravel, SiSpringboot,
  SiAngular, SiTailwindcss, SiBootstrap, SiJquery, SiPostgresql,
  SiMysql, SiFirebase, SiGit, SiFigma, SiDocker, SiPython,
  SiDart, SiPhp, SiGnubash, SiLinux, SiGnometerminal, SiFlask, SiGooglecloud
} from 'react-icons/si';
import { FaCode, FaJava, FaWindows } from 'react-icons/fa';

interface SkillIconProps {
  name: string;
  className?: string;
}

const SkillIcon = ({ name, className = 'w-5 h-5' }: SkillIconProps) => {
  const iconMap: { [key: string]: React.ElementType } = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    react: SiReact,
    angular: SiAngular,
    'tailwind css': SiTailwindcss,
    bootstrap: SiBootstrap,
    jquery: SiJquery,
    'node.js': SiNodedotjs,
    'express.js': SiExpress,
    'adonis.js': SiAdonisjs,
    fastapi: SiFastapi,
    laravel: SiLaravel,
    flask: SiFlask,
    'spring boot': SiSpringboot,
    postgresql: SiPostgresql,
    mysql: SiMysql,
    firebase: SiFirebase,
    git: SiGit,
    figma: SiFigma,
    docker: SiDocker,
    java: FaJava,
    python: SiPython,
    dart: SiDart,
    php: SiPhp,
    linux: SiLinux,
    windows: FaWindows,
    gcp: SiGooglecloud
  };

  const IconComponent = iconMap[name.toLowerCase()] || FaCode;

  return <IconComponent className={className} />;
};

export default SkillIcon;