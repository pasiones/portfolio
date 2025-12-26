import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './util/AnimatedSection';
import { SKILLS_DATA } from '../constants/data';
import { staggerContainer, scaleIn } from '../constants/animations';

const getIconColors = (isDark: boolean): { [key: string]: string } => ({
    'Java': isDark ? '#5382a1' : '#007396',
    'HTML5': '#E34F26',
    'CSS3': '#1572B6',
    'React.js': '#61DAFB',
    'Node.js': '#339933',
    'Docker': '#2496ED',
    'Kubernetes': '#326CE5',
    'TypeScript': '#3178C6',
    'Flask': isDark ? '#FFFFFF' : '#000000',
    'FastAPI': '#009688',
    'CI/CD (Github Actions)': '#2088FF',
    'Tailwind CSS': '#06B6D4',
    'PostgreSQL': '#4169E1',
    'MySQL': '#4479A1',
    'MariaDB': '#003545',
    'Git': '#F05032',
    'Ansible': '#EE0000',
    'Terraform': '#7B42BC',
    'GitLab': '#FC6D26',
    'Azure Databricks': '#FF3621',
});

const SkillsSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if dark mode is active
        const checkDarkMode = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        
        checkDarkMode();
        
        // Watch for changes in dark mode
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        
        return () => observer.disconnect();
    }, []);

    const filteredSkills = activeCategory === 'All'
        ? SKILLS_DATA
        : SKILLS_DATA.filter(skill => skill.category === activeCategory);

    return (
        <AnimatedSection id="skills">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center"
            >
                My Technology Stack
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-gray-600 dark:text-gray-400 mb-12"
            >
                Click a category to filter the tools I use.
            </motion.p>

            {/* Skill Category Tabs */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerContainer}
                className="flex justify-center mb-8 space-x-3 sm:space-x-4 flex-wrap"
            >
                {['All', 'Frontend', 'Backend', 'Tools'].map((category, index) => (
                    <motion.button
                        key={category}
                        variants={scaleIn}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(category)}
                        className={`skill-tab px-4 py-2 rounded-full text-sm font-medium transition duration-300 mt-2 ${
                            activeCategory === category
                                ? 'bg-accent text-white shadow-md'
                                : 'bg-gray-200 dark:bg-[#161b22] text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                        }`}
                    >
                        {category === 'Tools' ? 'DevOps & Tools' : category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Skill List */}
            <motion.div 
                key={activeCategory}
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto"
            >
                {filteredSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    const iconColors = getIconColors(isDark);
                    const iconColor = iconColors[skill.name] || (isDark ? '#c9d1d9' : '#1f2937');
                    
                    return (
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                            whileTap={{ scale: 0.95 }}
                            className="skill-card p-4 bg-gray-100 dark:bg-[#161b22] text-gray-800 dark:text-gray-300 rounded-xl shadow-lg hover:shadow-accent/50 transition-shadow duration-150 flex flex-col items-center gap-3"
                        >
                            <IconComponent className="text-5xl" style={{ color: iconColor }} />
                            <span className="text-sm font-medium">{skill.name}</span>
                            
                            {/* Progress Bar */}
                            <div className="w-full">
                                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.proficiency}%` }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 1, delay: index * 0.05 }}
                                        className="h-full bg-accent rounded-full"
                                    />
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                                    {skill.proficiency}%
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </AnimatedSection>
    );
};

export default SkillsSection;
