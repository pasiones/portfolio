import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface NavItem {
    id: string;
    label: string;
    icon: IconType;
}

const NavigationBar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

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

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
            
            // Update URL hash
            window.history.pushState(null, '', `#${targetId}`);
        }
    };

    const navItems: NavItem[] = [
        { id: 'home', label: 'Home', icon: FaHome },
        { id: 'about', label: 'About', icon: FaUser },
        { id: 'skills', label: 'Skills', icon: FaCode },
        { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
        { id: 'experience', label: 'Experience', icon: FaBriefcase },
        { id: 'contact', label: 'Contact', icon: FaEnvelope }
    ];

    return (
        <>
            {/* Desktop Sidebar */}
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

            {/* Mobile Top-Right Dropdown Menu */}
            <div ref={menuRef} className="fixed top-4 right-4 z-50 lg:hidden">
                {/* Hamburger Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="w-11 h-11 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300"
                >
                    <AnimatePresence mode="wait">
                        {menuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaTimes className="text-lg" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaBars className="text-lg" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-14 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden min-w-[180px]"
                        >
                            {navItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`flex items-center gap-3 px-4 py-3 transition-colors duration-200 ${
                                            activeSection === item.id
                                                ? 'bg-accent/10 text-accent'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                                        } ${index !== navItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-700/50' : ''}`}
                                    >
                                        <IconComponent className="text-base" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default NavigationBar;
