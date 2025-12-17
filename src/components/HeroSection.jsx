import React from 'react';
import { motion } from 'framer-motion';
import { fadeInDown } from '../constants/animations';

const HeroSection = () => {
    return (
        <section id="hero" className="py-20 sm:py-28 flex items-center h-screen -mt-20">
            <div className="max-w-3xl">
                <motion.p 
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                    className="text-accent text-xl font-medium mb-5 tracking-wide"
                >
                    Hello, my name is
                </motion.p>
                <motion.h1 
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                    className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-4"
                >
                    Dat Minh Lam.
                </motion.h1>
                <motion.h2 
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 dark:text-gray-400 mb-6"
                >
                    I build scalable web experiences.
                </motion.h2>
                <motion.p 
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                    className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-10"
                >
                    I'm a Fullstack Software Engineer specializing in building scalable web applications—from modern frontend frameworks to robust, containerized backend services. I transform complex challenges into elegant solutions. Currently, I'm exploring the meaningful applications of AI in software development.
                </motion.p>
                <motion.div 
                    custom={4}
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
        </section>
    );
};

export default HeroSection;
