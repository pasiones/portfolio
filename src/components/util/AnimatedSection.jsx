import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants/animations';

const AnimatedSection = ({ id, children, className = '' }) => {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
            variants={fadeInUp}
            className={`py-20 sm:py-28 ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;
