import React from 'react';

const Footer: React.FC = () => (
    <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-800 bg-gray-100/50 dark:bg-[#161b22]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Dat Minh Lam. Built with <span className="text-accent">&hearts;</span> and React.ts/Tailwind.</p>
        </div>
    </footer>
);

export default Footer;
