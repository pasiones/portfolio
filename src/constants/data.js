import { FaReact, FaNode, FaDocker, FaPython, FaGithub, FaAws, 
    FaGitAlt, FaJava, FaGitlab, FaHtml5, FaCss3Alt } from 'react-icons/fa';

import { SiTypescript, SiDjango, SiTailwindcss, SiPostgresql, 
    SiNextdotjs, SiGraphql, SiKubernetes, SiFlask, SiFastapi, 
    SiMariadb, SiAnsible, SiTerraform, SiMysql, SiDatabricks } from 'react-icons/si';

import GcpIcon from '../assets/icons/gcp-icon.svg?react';

export const ROLES_DATA = [
    'AI Engineer',
    'Backend Developer',
    'Frontend Developer',
    'DevOps Enthusiast',
    'Cloud Architect'
];

export const SKILLS_DATA = [
    { name: 'Java', category: 'Backend', icon: FaJava },
    { name: 'HTML5', category: 'Frontend', icon: FaHtml5 },
    { name: 'CSS3', category: 'Frontend', icon: FaCss3Alt },
    { name: 'React.js', category: 'Frontend', icon: FaReact },
    { name: 'Node.js', category: 'Backend', icon: FaNode },
    { name: 'Docker', category: 'Tools', icon: FaDocker },
    { name: 'Kubernetes', category: 'Tools', icon: SiKubernetes },
    { name: 'TypeScript', category: 'Frontend', icon: SiTypescript },
    //{ name: 'Django', category: 'Backend', icon: SiDjango },
    { name: 'Flask', category: 'Backend', icon: SiFlask },
    { name: 'FastAPI', category: 'Backend', icon: SiFastapi },
    { name: 'CI/CD (Github Actions)', category: 'Tools', icon: FaGithub },
    { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss },
    { name: 'PostgreSQL', category: 'Backend', icon: SiPostgresql },
    { name: 'MySQL', category: 'Backend', icon: SiMysql },
    { name: 'MariaDB', category: 'Backend', icon: SiMariadb },
    //{ name: 'AWS', category: 'Tools', icon: FaAws },
    //{ name: 'Next.js', category: 'Frontend', icon: SiNextdotjs },
    //{ name: 'GraphQL / REST', category: 'Backend', icon: SiGraphql },
    { name: 'Git', category: 'Tools', icon: FaGitAlt },
    { name: 'Ansible', category: 'Tools', icon: SiAnsible },
    { name: 'Terraform', category: 'Tools', icon: SiTerraform },
    { name: 'GitLab', category: 'Tools', icon: FaGitlab },
    { name: 'Azure Databricks', category: 'Tools', icon: SiDatabricks },
    { name: 'GCP', category: 'Tools', icon: GcpIcon }
];

export const PROJECTS_DATA = [
    {
        title: 'Zero-Fail Logistics Solution',
        period: 'Hackathon Project | November 2025',
        description: 'Built an end-to-end automated delivery solution for Valio Aimo at Junction Hackathon 2025, achieving 6th place among 15 competitors. Developed predictive ML models using XGBoost to forecast missing items, implemented an AI-powered customer communication system with LangChain, and created a full-stack application with multimodal claims handling (voice, text, images, video).',
        tags: ['Python', 'XGBoost', 'LangChain', 'FastAPI', 'React', 'TypeScript', 'MariaDB', 'Google Cloud'],
        link: 'https://github.com/vincentbui21/Hackathon2025'
    },
    {
        title: 'NPM Dependency Visualization Tool',
        period: 'Bachelor\'s Thesis | 2025',
        description: 'Designed and implemented an interactive graphical tool using React to visualize and analyze npm package dependencies. Provides clear, intuitive insights for developers to improve dependency management and understand complex package relationships through interactive visualizations.',
        tags: ['React', 'NPM', 'D3.js', 'JavaScript'],
        link: 'https://npm-dependency-explorer.vercel.app/'
    },
    {
        title: 'Predictive Extension for Electric Metric Data',
        period: 'Machine Learning & Full-Stack | 2024',
        description: 'A time-series prediction system for electric metric data using PyTorch for ML modeling, Flask backend, React frontend, and MySQL database. Deployed on CSC infrastructure with Docker containerization. Managed project workflow using Trello Kanban board for efficient team collaboration and task scheduling.',
        tags: ['PyTorch', 'Flask', 'React', 'MySQL', 'Docker', 'CSC', 'WSL'],
        isPrivate: true
    },
    {
        title: 'Smart Travel Companion',
        period: 'Full-Stack Development | 2025',
        description: 'A weather-based activity recommendation web app. Given a city name, the application displays weather information and suggests location categories (cafe, restaurant, cinema, park, etc.) tailored to current weather conditions. An interactive map updates based on user category selections.',
        tags: ['FastAPI', 'React', 'TypeScript', 'CSC'],
        link: 'http://79.76.39.35/'
    },
    {
        title: 'Real-Time Weather Desktop Application',
        period: 'Desktop Application Development | 2024',
        description: 'Built a desktop application using Java and JavaFX to display real-time weather data with an intuitive user interface. Implemented Git version control and CI pipeline to streamline development workflow and automate deployment processes.',
        tags: ['Java', 'JavaFX', 'Git', 'CI/CD'],
        link: 'https://github.com/pasiones/Java-Weather-App'
    }
];

export const EXPERIENCE_DATA = [
    {
        title: 'Bachelor of Science in Electrical and Computer Engineering',
        company: 'Tampere University',
        period: '2022 - 2025',
        bullets: [
            'Graduated with a major in Software Development and minor in Machine Learning.',
            'Mastered data structures and algorithms using C++, building a strong foundation in computational problem-solving.',
            'Designed backend architectures following OOP principles for applications including a weather app using Java, checker game and university management system using C++, ',
            'Developed user interfaces for course projects using React.js, gaining hands-on full-stack development experience.',
            'Utilized Linux Ubuntu virtual machines extensively throughout programming coursework, strengthening command-line proficiency.',
        ],
        alignment: 'right',
    },
    {
        title: 'Master of Science in Web, Software and Cloud',
        company: 'Tampere University',
        period: '2025 - 2027 (Ongoing)',
        bullets: [
            'Led frontend development (React) for a Jira plugin providing AI-powered assistance for bug reports in Software Engineering project course.',
            'Performed prompt engineering for LLM integration, optimizing AI responses for bug report analysis and recommendations.',
            'Implemented CI/CD pipelines and deployed projects on cloud infrastructure including CSC, and Google Cloud.',
            'Designed and built "Smart Travel Companion" web app (Software Design course) that recommends location-based activities based on real-time weather data.',
            'Developed full-stack applications using FastAPI, React with TypeScript, and deployed on CSC infrastructure.',
        ],
        alignment: 'left',
    },
    {
        title: 'ML Engineer & Full-Stack Developer',
        company: 'Predictive Electric Metric Extension Project',
        period: '2024',
        bullets: [
            'Developed a time-series prediction extension using PyTorch for analyzing and forecasting electric metric data.',
            'Built full-stack application with Flask backend and React frontend, deployed on CSC infrastructure using Docker.',
            'Implemented and maintained MySQL database for efficient storage and management of electric metric data.',
            'Developed the entire system in WSL (Windows Subsystem for Linux) environment for seamless deployment.',
            'Managed workload distribution and task scheduling using Trello Kanban board for efficient team collaboration.',
        ],
        alignment: 'right',
    },
    {
        title: 'ML Engineer & Full-Stack Developer',
        company: 'Junction Hackathon 2025',
        period: 'November 2025',
        bullets: [
            'Developed an end-to-end automated delivery solution for Valio Aimo\'s "Zero-fail logistics" challenge, achieving 6th place among 15 competitors.',
            'Built predictive models using pandas, scikit-learn, numpy, and XGBoost to forecast missing items based on order, stock, and supplier data.',
            'Designed and implemented an AI-powered customer communication system using LangChain for proactive shortage notifications and replacement proposals.',
            'Contributed to UI design and deployment of the full-stack application (FastAPI, MariaDB, React with TypeScript) on Google Cloud.',
            'Integrated multimodal claims handling (voice, text, images, video) for post-delivery remediation and same-day corrective deliveries.',
        ],
        alignment: 'left',
    }
];

