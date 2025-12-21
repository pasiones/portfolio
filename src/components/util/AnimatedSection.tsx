import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants/animations';

interface AnimatedSectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    padding?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, children, className = '', padding = 'py-12 sm:py-16' }) => {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
            variants={fadeInUp}
            className={`${padding} ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;
