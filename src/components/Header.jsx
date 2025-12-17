import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="sticky top-0 z-50 bg-white/95 dark:bg-[#161b22]/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <a 
                    href="#hero" 
                    onClick={(e) => handleNavClick(e, 'hero')}
                    className="text-2xl font-bold text-accent hover:opacity-80 transition duration-300"
                >
                    D.M. Lam
                </a>
                <nav className="space-x-4">
                    <a 
                        href="#skills" 
                        onClick={(e) => handleNavClick(e, 'skills')}
                        className="nav-link text-gray-800 dark:text-gray-300 text-base font-medium hover:text-accent dark:hover:text-accent transition duration-150 hidden sm:inline-block"
                    >
                        Skills
                    </a>
                    <a 
                        href="#projects" 
                        onClick={(e) => handleNavClick(e, 'projects')}
                        className="nav-link text-gray-800 dark:text-gray-300 text-base font-medium hover:text-accent dark:hover:text-accent transition duration-150 hidden sm:inline-block"
                    >
                        Projects
                    </a>
                    <a 
                        href="#experience" 
                        onClick={(e) => handleNavClick(e, 'experience')}
                        className="nav-link text-gray-800 dark:text-gray-300 text-base font-medium hover:text-accent dark:hover:text-accent transition duration-150 hidden sm:inline-block"
                    >
                        Experience
                    </a>
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="nav-link text-base font-medium hover:bg-accent hover:text-white transition duration-150 p-2 border border-accent rounded-lg text-accent"
                    >
                        Contact Me
                    </a>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
