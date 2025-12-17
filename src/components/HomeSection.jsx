import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInDown } from '../constants/animations';
import { ROLES_DATA } from '../constants/data';

const HomeSection = () => {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % ROLES_DATA.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="py-20 sm:py-28 flex items-center h-screen -mt-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl">
            <div className="flex-1">
                <motion.p 
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                    className="text-accent text-3xl font-medium mb-4 font-inter"
                >
                    Hello, I am
                </motion.p>
                <motion.h1 
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                    className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white mb-4 font-poppins"
                >
                    Dat Minh Lam
                </motion.h1>
                <motion.h2 
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-400 mb-10 h-16 flex items-center font-poppins"
                >
                    <div className="relative overflow-hidden inline-block min-w-full">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentRole}
                                className="inline-flex whitespace-nowrap"
                            >
                                {ROLES_DATA[currentRole].split('').map((char, i) => (
                                    <motion.span
                                        key={`${currentRole}-${i}`}
                                        initial={{ y: '100%', opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: '-100%', opacity: 0 }}
                                        transition={{
                                            delay: i * 0.04,
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }}
                                        className="inline-block"
                                        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </motion.h2>
                <motion.div 
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                    className="flex space-x-4"
                >
                    <motion.a 
                        href="#projects" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
                    >
                        View My Work
                    </motion.a>
                    <motion.a 
                        href="#contact" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-gray-600 dark:border-gray-600 text-gray-800 dark:text-gray-300 font-semibold py-3 px-8 rounded-lg transition duration-300 hover:border-accent hover:text-accent"
                    >
                        Email Me
                    </motion.a>
                </motion.div>
            </div>
            
            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex-1 flex justify-center lg:justify-end lg:pl-12"
            >
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                    {/* Animated Background Rings */}
                    <motion.div 
                        className="absolute -inset-2 bg-gradient-to-r from-accent to-emerald-400 rounded-full"
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1],
                            borderRadius: ["50% 50% 50% 50%/50% 50% 50% 50%", "44% 56% 54% 46%/56% 44% 46% 54%", "46% 54% 44% 56%/54% 46% 56% 44%", "50% 50% 50% 50%/50% 50% 50% 50%"]
                        }}
                        transition={{ 
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            borderRadius: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                    <motion.div 
                        className="absolute inset-2 bg-gradient-to-l from-teal-400 to-cyan-500 rounded-full opacity-70"
                        animate={{ 
                            rotate: -360,
                            scale: [1, 1.05, 1],
                            borderRadius: ["50% 50% 50% 50%/50% 50% 50% 50%", "56% 44% 46% 54%/44% 56% 54% 46%", "54% 46% 56% 44%/46% 54% 44% 56%", "50% 50% 50% 50%/50% 50% 50% 50%"]
                        }}
                        transition={{ 
                            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                            borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
                        }}
                    />
                    
                    {/* Image Container with Hover Effect */}
                    <motion.div 
                        className="absolute inset-6 overflow-hidden bg-white dark:bg-gray-800 shadow-2xl"
                        animate={{
                            borderRadius: ["50% 50% 50% 50%/50% 50% 50% 50%", "40% 60% 55% 45%/60% 40% 45% 55%", "55% 45% 40% 60%/45% 55% 60% 40%", "45% 55% 60% 40%/55% 45% 40% 60%", "50% 50% 50% 50%/50% 50% 50% 50%"]
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ 
                            borderRadius: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 0.3 }
                        }}
                    >
                        <img 
                            src="/profile.jpg" 
                            alt="Dat Minh Lam"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </motion.div>
            </div>
        </section>
    );
};

export default HomeSection;
