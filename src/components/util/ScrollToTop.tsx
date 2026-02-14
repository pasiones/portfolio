import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        window.history.pushState(null, '', '#home');
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
                opacity: isVisible ? 1 : 0, 
                scale: isVisible ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-accent hover:bg-accent-hover text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
            whileHover={{ scale: 1.2, transition: { duration: 0.05 } }}
            whileTap={{ scale: 0.8, transition: { duration: 0.03 } }}
            aria-label="Scroll to top"
        >
            <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
            </svg>
        </motion.button>
    );
};

export default ScrollToTop;
