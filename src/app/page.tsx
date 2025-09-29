import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
     <main>
      <HeroSection />
      <ExperienceSection/>
      <ProjectSection/>
      <SkillsSection/>
      <AchievementsSection/>
      <ContactSection/>
    </main>
    <Footer/>
    </>
   
  );
}