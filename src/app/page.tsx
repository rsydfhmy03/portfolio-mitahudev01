import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection/>
      <ProjectSection/>
      <SkillsSection/>
    </main>
  );
}