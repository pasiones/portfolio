import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './util/AnimatedSection';
import { fadeInUp } from '../constants/animations';

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
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-justify">
                        I'm a Fullstack Software Engineer specializing in building scalable web applications—from modern frontend frameworks to robust, containerized backend services. With a passion for clean code and efficient architecture, I transform complex challenges into elegant solutions that deliver real value to users and businesses.
                    </p>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-justify">
                        My expertise spans across the entire development lifecycle, from designing intuitive user interfaces to architecting distributed backend systems. I thrive on working with cutting-edge technologies and best practices, ensuring that every project I touch is built for scalability, maintainability, and performance.
                    </p>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                        Currently, I'm exploring the meaningful applications of AI in software development, focusing on how these technologies can enhance user experiences and solve real-world problems. I believe in continuous learning and staying at the forefront of technological innovation to create impactful solutions.
                    </p>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default AboutSection;
