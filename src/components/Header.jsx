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
            className="sticky top-0 z-50 bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
                <a 
                    href="#hero" 
                    onClick={(e) => handleNavClick(e, 'hero')}
                    className="text-2xl font-bold text-accent hover:scale-105 transition-transform duration-300"
                >
                    D.M. Lam
                </a>
                <nav className="flex items-center space-x-6">
                    <a 
                        href="#skills" 
                        onClick={(e) => handleNavClick(e, 'skills')}
                        className="nav-link text-gray-700 dark:text-gray-300 text-base font-medium hover:text-accent dark:hover:text-accent transition-colors duration-300 hidden sm:inline-block relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Skills
                    </a>
                    <a 
                        href="#projects" 
                        onClick={(e) => handleNavClick(e, 'projects')}
                        className="nav-link text-gray-700 dark:text-gray-300 text-base font-medium hover:text-accent dark:hover:text-accent transition-colors duration-300 hidden sm:inline-block relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Projects
                    </a>
                    <a 
                        href="#experience" 
                        onClick={(e) => handleNavClick(e, 'experience')}
                        className="nav-link text-gray-700 dark:text-gray-300 text-base font-medium hover:text-accent dark:hover:text-accent transition-colors duration-300 hidden sm:inline-block relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Experience
                    </a>
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="nav-link text-base font-semibold bg-accent text-white hover:bg-[#2ea043] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 px-6 py-2.5 rounded-lg"
                    >
                        Contact Me
                    </a>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
