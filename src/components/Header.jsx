import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const NavigationBar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop } = element;
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            
            // Update URL hash
            window.history.pushState(null, '', `#${targetId}`);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: FaHome },
        { id: 'about', label: 'About', icon: FaUser },
        { id: 'skills', label: 'Skills', icon: FaCode },
        { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
        { id: 'experience', label: 'Experience', icon: FaBriefcase },
        { id: 'contact', label: 'Contact', icon: FaEnvelope }
    ];

    return (
        <motion.nav 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed left-8 top-1/4 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8"
        >
            {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                    <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="group relative flex items-center"
                    >
                        <div className={`w-14 h-14 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                            activeSection === item.id 
                                ? 'bg-accent border-accent scale-110' 
                                : 'bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-600 hover:border-accent hover:bg-accent/10'
                        }`}>
                            <IconComponent className={`text-xl ${
                                activeSection === item.id 
                                    ? 'text-white' 
                                    : 'text-gray-600 dark:text-gray-400 group-hover:text-accent'
                            }`} />
                        </div>
                        <span className={`absolute left-20 whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gray-800 dark:bg-gray-700 text-white shadow-lg`}>
                            {item.label}
                        </span>
                    </motion.a>
                );
            })}
        </motion.nav>
    );
};

export default NavigationBar;
