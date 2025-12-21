import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './util/AnimatedSection';
import { fadeInUp } from '../constants/animations';
import { ABOUT_DATA } from '../constants/data';

const AboutSection = () => {
    return (
        <AnimatedSection id="about">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center"
            >
                About Me
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg"
                >
                    {ABOUT_DATA.map((paragraph, index) => (
                        <p 
                            key={index}
                            className={`text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify ${
                                index < ABOUT_DATA.length - 1 ? 'mb-6' : ''
                            }`}
                        >
                            {paragraph}
                        </p>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default AboutSection;
