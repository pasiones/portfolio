import React, { useEffect } from 'react';
import NavigationBar from './components/NaviBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/util/ScrollToTop';
import CustomCursor from './components/util/CustomCursor';
import ScrollProgress from './components/util/ScrollProgress';
import ThemeToggle from './components/util/ThemeToggle';

const App: React.FC = () => {
    useEffect(() => {
        // Restore scroll position to the correct section on refresh
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        const hash = window.location.hash;
        if (hash) {
            // Wait for content to render before scrolling to hash target
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop,
                        behavior: 'instant'
                    });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <ScrollProgress />
            <CustomCursor />
            <ThemeToggle />
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