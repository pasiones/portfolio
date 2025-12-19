import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './util/AnimatedSection';
import { EXPERIENCE_DATA } from '../constants/data';

const ExperienceSection = () => (
    <AnimatedSection id="experience" className="!pt-12 sm:!pt-16">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center"
        >
            Career Journey
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-400 dark:bg-gray-700 h-full hidden md:block"></div>

            {EXPERIENCE_DATA.map((job, index) => {
                const isRight = job.alignment === 'right';
                return (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`mb-12 flex justify-between items-center w-full ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                    >
                        <div className="w-full md:w-[47%]">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className={`bg-white dark:bg-[#161b22] p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-accent/20 border-l-4 md:${
                                    isRight ? 'border-l-4' : 'border-r-4 border-l-0'
                                } border-accent`}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                                <p className="text-accent mb-1">{job.company}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{job.period}</p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2 leading-relaxed">
                                    {job.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex}>{bullet}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                            className="hidden md:block w-3 h-3 bg-accent rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 ring-4 ring-white dark:ring-[#0d1117]"
                        ></motion.div>
                        <div className="hidden md:block w-[47%]"></div>
                    </motion.div>
                );
            })}
        </div>
    </AnimatedSection>
);

export default ExperienceSection;
