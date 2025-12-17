import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <>
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HeroSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
            </main>

            <Footer />
            <ScrollToTop />
        </>
    );
};

export default App;