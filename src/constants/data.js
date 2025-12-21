import { FaReact, FaNode, FaDocker, FaPython, FaGithub, FaAws, 
    FaGitAlt, FaJava, FaGitlab, FaHtml5, FaCss3Alt } from 'react-icons/fa';

import { SiTypescript, SiDjango, SiTailwindcss, SiPostgresql, 
    SiNextdotjs, SiGraphql, SiKubernetes, SiFlask, SiFastapi, 
    SiMariadb, SiAnsible, SiTerraform, SiMysql, SiDatabricks } from 'react-icons/si';

import GcpIcon from '../assets/icons/gcp-icon.svg?react';

export const ROLES_DATA = [
    'Full-Stack Developer',
    'AI/ML Engineer',
    'Cloud & DevOps Enthusiast',
];

export const ABOUT_DATA = [
    'I\'m a Fullstack Software Engineer specializing in building scalable web applications—from ' + 
    'modern frontend frameworks to robust, containerized backend services. With a passion for clean ' + 
    'code and efficient architecture, I transform complex challenges into elegant solutions that deliver ' + 
    'real value to users and businesses.',

    'My expertise spans across the entire development lifecycle, from designing intuitive user interfaces ' + 
    'to architecting distributed backend systems. I thrive on working with cutting-edge technologies and ' + 
    'best practices, ensuring that every project I touch is built for scalability, maintainability, and performance.',

    'Currently, I\'m exploring the meaningful applications of AI in software development, focusing on how these ' +
    'technologies can enhance user experiences and solve real-world problems. I believe in continuous learning and ' +
    'staying at the forefront of technological innovation to create impactful solutions.',

    'Beyond development, I\'m deeply invested in modern cloud infrastructure and DevOps practices. I actively work ' +
    'with containerization tools like Docker and Kubernetes, infrastructure as code through Terraform and Ansible, ' +
    'and cloud platforms including Google Cloud Platform and CSC infrastructure. Currently pursuing AWS Solution Architect ' +
    'certification to deepen my expertise in cloud architecture patterns and best practices. I\'m passionate about building ' +
    'automated CI/CD pipelines and creating resilient, scalable architectures that bridge the gap between development and operations.'
];

export const SKILLS_DATA = [
    { name: 'Java', category: 'Backend', icon: FaJava, proficiency: 80 },
    { name: 'HTML5', category: 'Frontend', icon: FaHtml5, proficiency: 90 },
    { name: 'CSS3', category: 'Frontend', icon: FaCss3Alt, proficiency: 90 },
    { name: 'React.js', category: 'Frontend', icon: FaReact, proficiency: 90 },
    { name: 'Node.js', category: 'Backend', icon: FaNode, proficiency: 90 },
    { name: 'Docker', category: 'Tools', icon: FaDocker, proficiency: 90 },
    { name: 'Kubernetes', category: 'Tools', icon: SiKubernetes, proficiency: 60 },
    { name: 'TypeScript', category: 'Frontend', icon: SiTypescript, proficiency: 85 },
    //{ name: 'Django', category: 'Backend', icon: SiDjango, proficiency: 75 },
    { name: 'Flask', category: 'Backend', icon: SiFlask, proficiency: 80 },
    { name: 'FastAPI', category: 'Backend', icon: SiFastapi, proficiency: 80 },
    { name: 'CI/CD (Github Actions)', category: 'Tools', icon: FaGithub, proficiency: 70 },
    { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, proficiency: 90 },
    { name: 'PostgreSQL', category: 'Backend', icon: SiPostgresql, proficiency: 80 },
    { name: 'MySQL', category: 'Backend', icon: SiMysql, proficiency: 80 },
    { name: 'MariaDB', category: 'Backend', icon: SiMariadb, proficiency: 80 },
    //{ name: 'AWS', category: 'Tools', icon: FaAws, proficiency: 70 },
    //{ name: 'Next.js', category: 'Frontend', icon: SiNextdotjs, proficiency: 75 },
    //{ name: 'GraphQL / REST', category: 'Backend', icon: SiGraphql, proficiency: 80 },
    { name: 'Git', category: 'Tools', icon: FaGitAlt, proficiency: 95 },
    { name: 'Ansible', category: 'Tools', icon: SiAnsible, proficiency: 65 },
    { name: 'Terraform', category: 'Tools', icon: SiTerraform, proficiency: 80 },
    { name: 'GitLab', category: 'Tools', icon: FaGitlab, proficiency: 95 },
    { name: 'Azure Databricks', category: 'Tools', icon: SiDatabricks, proficiency: 85 },
    { name: 'GCP', category: 'Tools', icon: GcpIcon, proficiency: 75 }
];

export const PROJECTS_DATA = [
    {
        title: 'Zero-Fail Logistics Solution',
        period: 'Hackathon Project | November 2025',
        description: 
            'Built an end-to-end automated delivery solution for Valio Aimo at Junction Hackathon 2025, ' +
            'achieving 6th place among 15 competitors. Developed predictive ML models using XGBoost to forecast ' +
            'missing items, implemented an AI-powered customer communication system with LangChain, and created ' +
            'a full-stack application with multimodal claims handling (voice, text, images, video).',
        tags: [
            'Python', 'XGBoost', 'LangChain', 'FastAPI', 
            'React', 'TypeScript', 'MariaDB', 'Google Cloud'
        ],
        link: 'https://github.com/vincentbui21/Hackathon2025'
    },
    {
        title: 'NPM Dependency Visualization Tool',
        period: 'Bachelor\'s Thesis | Spring 2025',
        description: 
            'Designed and implemented an interactive graphical tool using React to visualize and analyze npm ' +
            'package dependencies. Provides clear, intuitive insights for developers to improve dependency ' +
            'management and understand complex package relationships through interactive visualizations.',
        tags: ['React', 'NPM', 'D3.js', 'JavaScript'],
        link: 'https://npm-dependency-explorer.vercel.app/'
    },
    {
        title: 'Smart Travel Companion',
        period: 'Full-Stack Development | November 2025',
        description: 
            'A weather-based activity recommendation web app. Given a city name, the application displays weather ' +
            'information and suggests location categories (cafe, restaurant, cinema, park, etc.) tailored to current ' +
            'weather conditions. An interactive map updates based on user category selections.',
        tags: ['FastAPI', 'React', 'TypeScript', 'Oracle Cloud'],
        link: 'http://79.76.39.35/'
    },
    {
        title: 'Real-Time Weather Desktop Application',
        period: 'Desktop Application Development | 2024',
        description: 
            'Built a desktop application using Java and JavaFX to display real-time weather data with an intuitive ' +
            'user interface. Implemented Git version control and CI pipeline to streamline development workflow and ' +
            'automate deployment processes.',
        tags: ['Java', 'JavaFX', 'Git', 'CI/CD'],
        link: 'https://github.com/pasiones/Java-Weather-App'
    },
    {
        title: 'AI-Powered Jira Plugin for Bug Reports',
        period: 'Software Engineering Project | Autumn 2025',
        description: 
            'Developed a Jira plugin that provides AI-powered assistance for bug report creation and analysis. ' +
            'Led frontend development using React, implemented prompt engineering for LLM integration to optimize ' +
            'AI responses, and created an intuitive interface for automated bug report analysis and recommendations.',
        tags: ['React', 'JavaScript', 'Jira API', 'OpenAI API', 'Forge App'],
        isPrivate: true
    },
        {
        title: 'Predictive Extension for Electric Metric Data',
        period: 'Software Engineering Project | Spring 2025',
        description: 
            'A time-series prediction system for electric metric data using PyTorch for ML modeling, Flask backend, ' +
            'React frontend, and MySQL database. Deployed on CSC infrastructure with Docker containerization. ' +
            'Managed project workflow using Trello Kanban board for efficient team collaboration and task scheduling.',
        tags: ['PyTorch', 'Flask', 'React', 'MySQL', 'Docker', 'CSC', 'WSL'],
        isPrivate: true
    },
        {
        title: 'Kubernetes-Based E-commerce Platform Deployment',
        period: 'Cloud & DevOps Project | Spring 2025',
        description:
            'Designed and deployed a fully functional Kubernetes cluster on CSC cPouta cloud using Rancher for cluster management. ' +
            'Implemented container orchestration with Kubernetes, configured Nginx ingress controller and load balancing to expose services externally, ' +
            'and set up an NFS server for persistent storage. Deployed the EverStore e-commerce platform with its database stored on NFS, ' +
            'ensuring scalability, fault tolerance, and automated service recovery.',
        tags: ['Kubernetes', 'Rancher', 'Docker', 'Nginx', 'NFS', 'CSC cPouta'],
        isPrivate: true
    }
];

export const EXPERIENCE_DATA = [
    {
        title: 'Master of Science in Web, Software and Cloud',
        company: 'Tampere University',
        period: '2025 - 2027 (Ongoing)',
        bullets: [
            'Led frontend development (React) for a Jira plugin providing AI-powered assistance for bug ' +
                'reports in Software Engineering project course.',
            'Performed prompt engineering for LLM integration, optimizing AI responses for bug report ' +
                'analysis and recommendations.',
            'Implemented CI/CD pipelines and deployed projects on cloud infrastructure including CSC, and ' +
                'Google Cloud.',
            'Designed and built "Smart Travel Companion" web app (Software Design course) that recommends ' +
                'location-based activities based on real-time weather data.',
            'Developed full-stack applications using FastAPI, React with TypeScript, and deployed on CSC ' +
                'infrastructure.',
        ],
        alignment: 'right',
    },
    {
        title: 'Frontend Developer & AI Engineer',
        company: 'AI-Powered Jira Plugin for Bug Reports Project',
        period: 'Autumn 2025',
        bullets: [
            'Led frontend development (React) for a Jira plugin providing AI-powered assistance for bug ' +
                'reports in Software Engineering project course.',
            'Performed prompt engineering for LLM integration, optimizing AI responses for bug report ' +
                'analysis and recommendations.',
            'Designed and implemented user interface components for seamless integration with Jira workflow.',
            'Collaborated with backend team to integrate AI features and ensure smooth data flow.',
        ],
        alignment: 'left',
    },
    {
        title: 'ML Engineer & Full-Stack Developer',
        company: 'Junction Hackathon 2025',
        period: 'November 2025',
        bullets: [
            'Developed an end-to-end automated delivery solution for Valio Aimo\'s "Zero-fail logistics" ' +
                'challenge, achieving 6th place among 15 competitors.',
            'Built predictive models using pandas, scikit-learn, numpy, and XGBoost to forecast missing ' +
                'items based on order, stock, and supplier data.',
            'Designed and implemented an AI-powered customer communication system using LangChain for ' +
                'proactive shortage notifications and replacement proposals.',
            'Contributed to UI design and deployment of the full-stack application (FastAPI, MariaDB, ' +
                'React with TypeScript) on Google Cloud.',
            'Integrated multimodal claims handling (voice, text, images, video) for post-delivery ' +
                'remediation and same-day corrective deliveries.',
        ],
        alignment: 'right',
    },
    {
        title: 'ML Engineer & Full-Stack Developer',
        company: 'Predictive Electric Metric Extension Project',
        period: 'Spring 2025',
        bullets: [
            'Developed a time-series prediction extension using PyTorch for analyzing and forecasting ' +
                'electric metric data.',
            'Built full-stack application with Flask backend and React frontend, deployed on CSC ' +
                'infrastructure using Docker.',
            'Implemented and maintained MySQL database for efficient storage and management of electric ' +
                'metric data.',
            'Developed the entire system in WSL (Windows Subsystem for Linux) environment for seamless ' +
                'deployment.',
            'Managed workload distribution and task scheduling using Trello Kanban board for efficient ' +
                'team collaboration.',
        ],
        alignment: 'left',
    },
    {
        title: 'Bachelor of Science in Electrical and Computer Engineering',
        company: 'Tampere University',
        period: '2022 - 2025',
        bullets: [
            'Graduated with a major in Software Development and minor in Machine Learning.',
            'Mastered data structures and algorithms using C++, building a strong foundation in ' +
                'computational problem-solving.',
            'Designed backend architectures following OOP principles for applications including a weather ' +
                'app using Java, checker game and university management system using C++, ',
            'Developed user interfaces for course projects using React.js, gaining hands-on full-stack ' +
                'development experience.',
            'Utilized Linux Ubuntu virtual machines extensively throughout programming coursework, ' +
                'strengthening command-line proficiency.',
        ],
        alignment: 'right',
    }
];

