import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(false);
    const [isSmScreen, setIsSmScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmScreen(window.innerWidth >= 640);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        // Check localStorage and system preference on mount
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        
        if (shouldBeDark) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
        
        localStorage.setItem('theme', newTheme);
    };

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="fixed top-4 sm:top-8 left-4 sm:left-8 z-50 group"
        >
            <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-full px-3 py-2 sm:px-5 sm:py-3 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
                aria-label="Toggle dark mode"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/0 via-teal-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Sun Icon */}
                <motion.div
                    animate={{
                        scale: !isDark ? 1.2 : 0.8,
                        rotate: !isDark ? 0 : 180,
                        opacity: !isDark ? 1 : 0.3
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <FaSun className="text-base sm:text-xl text-amber-500 relative z-10" />
                </motion.div>
                
                {/* Slider Track */}
                <div className="relative w-10 h-6 sm:w-16 sm:h-8 bg-gradient-to-r from-amber-200 to-blue-200 dark:from-indigo-900 dark:to-purple-900 rounded-full shadow-inner">
                    {/* Slider Knob */}
                    <motion.div
                        className="absolute top-1 w-4 h-4 sm:w-6 sm:h-6 rounded-full shadow-lg"
                        animate={{
                            x: isDark ? (isSmScreen ? 34 : 18) : 2,
                            backgroundColor: isDark ? '#1e293b' : '#ffffff',
                            boxShadow: isDark 
                                ? '0 0 15px rgba(168, 85, 247, 0.5), 0 2px 4px rgba(0,0,0,0.3)' 
                                : '0 0 15px rgba(251, 191, 36, 0.5), 0 2px 4px rgba(0,0,0,0.2)'
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    >
                        <motion.div
                            className="w-full h-full rounded-full flex items-center justify-center"
                            animate={{
                                rotate: isDark ? 360 : 0
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            {isDark ? (
                                <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full" />
                            ) : (
                                <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full" />
                            )}
                        </motion.div>
                    </motion.div>
                </div>
                
                {/* Moon Icon */}
                <motion.div
                    animate={{
                        scale: isDark ? 1.2 : 0.8,
                        rotate: isDark ? 0 : -180,
                        opacity: isDark ? 1 : 0.3
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <FaMoon className="text-base sm:text-xl text-indigo-400 relative z-10" />
                </motion.div>
            </motion.button>
            
            {/* Tooltip */}
            <motion.span
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-12 sm:top-16 whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 dark:bg-gray-800 text-white shadow-2xl border border-gray-700 pointer-events-none"
            >
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </motion.span>
        </motion.div>
    );
};

export default ThemeToggle;
