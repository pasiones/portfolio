import React from 'react';
import NavigationBar from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/util/ScrollToTop';
import CustomCursor from './components/util/CustomCursor';

const App = () => {
    return (
        <>
            <CustomCursor />
            <NavigationBar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HomeSection />
                <AboutSection />
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