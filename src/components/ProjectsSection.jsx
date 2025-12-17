import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedSection from './util/AnimatedSection';
import { PROJECTS_DATA } from '../constants/data';
import { staggerContainer, fadeInUp } from '../constants/animations';

const ProjectsSection = () => (
    <AnimatedSection id="projects" className="bg-gray-100 dark:bg-[#161b22] rounded-xl shadow-2xl">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center"
        >
            Featured Projects
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-600 dark:text-gray-400 mb-12"
        >
            A selection of my recent fullstack work.
        </motion.p>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10"
        >
            {PROJECTS_DATA.map((project, index) => {
                const CardWrapper = project.link && project.link !== '#' ? motion.a : motion.div;
                const linkProps = project.link && project.link !== '#' ? {
                    href: project.link,
                    target: "_blank",
                    rel: "noopener noreferrer"
                } : {};

                return (
                    <CardWrapper
                        key={index}
                        {...linkProps}
                        variants={fadeInUp}
                        whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(35, 134, 54, 0.2)" }}
                        className={`project-card bg-white dark:bg-[#0d1117] p-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-accent transition duration-300 shadow-xl ${project.link && project.link !== '#' ? 'cursor-pointer' : ''}`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-semibold text-accent flex items-center gap-2">
                                {project.title}
                                {project.link && project.link !== '#' && (
                                    <FaExternalLinkAlt className="text-lg opacity-60" />
                                )}
                            </h3>
                            {project.isPrivate && (
                                <span className="text-xs bg-gray-400 dark:bg-gray-600 text-white px-2 py-1 rounded-full">
                                    Private
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{project.period}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {project.tags.map((tag, tagIndex) => (
                                <motion.span 
                                    key={tagIndex}
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </CardWrapper>
                );
            })}
        </motion.div>
    </AnimatedSection>
);

export default ProjectsSection;
