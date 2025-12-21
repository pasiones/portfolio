import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './util/AnimatedSection';
import { ABOUT_DATA } from '../constants/data';

const AboutSection: React.FC = () => {
    return (
        <AnimatedSection id="about" padding='py-20 sm:py-22'>
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
                            {paragraph.text}
                            {paragraph.highlights.map((highlight, hIndex) => (
                                <span
                                    key={hIndex}
                                    className={`${
                                        highlight.bold ? 'font-semibold' : ''
                                    } ${
                                        highlight.color 
                                            ? 'text-gray-800 dark:text-gray-200 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 px-1 rounded' 
                                            : ''
                                    }`}
                                >
                                    {highlight.text}
                                </span>
                            ))}
                        </p>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default AboutSection;
