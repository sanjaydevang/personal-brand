import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import InterestsSection from './components/sections/InterestsSection';
import ExtracurricularsSection from './components/sections/ExtracurricularsSection';
import ContactSection from './components/sections/ContactSection';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header activeSection={null} />
      <main className="flex-1">
        <section id="home">
          <HeroSection />
        </section>
        <section id="journey">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="extracurriculars">
          <ExtracurricularsSection />
        </section>
        <section id="interests">
          <InterestsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App; 