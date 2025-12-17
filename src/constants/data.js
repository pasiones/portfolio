import { FaReact, FaNode, FaDocker, FaPython, FaGithub, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiTailwindcss, SiPostgresql, SiNextdotjs, SiGraphql, SiKubernetes, SiFlask, SiFastapi, SiMariadb } from 'react-icons/si';

export const SKILLS_DATA = [
    { name: 'React.js', category: 'Frontend', icon: FaReact },
    { name: 'Node.js / Express', category: 'Backend', icon: FaNode },
    { name: 'Docker', category: 'Tools', icon: FaDocker },
    { name: 'Kubernetes', category: 'Tools', icon: SiKubernetes },
    { name: 'TypeScript', category: 'Frontend', icon: SiTypescript },
    { name: 'Python / Django', category: 'Backend', icon: FaPython },
    { name: 'Flask', category: 'Backend', icon: SiFlask },
    { name: 'FastAPI', category: 'Backend', icon: SiFastapi },
    { name: 'CI/CD (Github Actions)', category: 'Tools', icon: FaGithub },
    { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss },
    { name: 'PostgreSQL', category: 'Backend', icon: SiPostgresql },
    { name: 'MariaDB', category: 'Backend', icon: SiMariadb },
    { name: 'AWS', category: 'Tools', icon: FaAws },
    { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs },
    { name: 'GraphQL / REST', category: 'Backend', icon: SiGraphql },
    { name: 'Git', category: 'Tools', icon: FaGitAlt },
];

export const PROJECTS_DATA = [
    {
        title: 'SaaS Microservice Platform',
        period: 'Fullstack Development | 2023',
        description: 'A robust, multi-tenant platform for managing client subscriptions and data analytics. Built with a Next.js frontend, a Go microservices backend, and leveraging Kafka for async messaging.',
        tags: ['Next.js', 'GoLang', 'PostgreSQL', 'Kubernetes']
    },
    {
        title: 'Real-time Data Dashboard',
        period: 'Frontend Engineering | 2022',
        description: 'Developed a high-performance, real-time analytics dashboard using React and WebSockets. Optimized data rendering for millions of records, ensuring sub-second updates.',
        tags: ['React', 'D3.js', 'WebSockets', 'TypeScript']
    },
    {
        title: 'Open-Source API Gateway',
        period: 'Backend & DevOps | 2021',
        description: 'Contributed to a popular Node.js API Gateway project, focusing on authentication middleware, rate-limiting, and improving documentation for community adoption.',
        tags: ['Node.js', 'Express', 'Jest', 'Nginx']
    },
];

export const EXPERIENCE_DATA = [
    {
        title: 'Senior Software Engineer',
        company: 'TechCorp Innovations',
        period: '2021 - Present',
        bullets: [
            'Led the migration of legacy services to modern serverless architecture (AWS Lambda).',
            'Mentored junior developers in adopting best practices for code quality and testing.',
        ],
        alignment: 'right',
    },
    {
        title: 'Fullstack Developer',
        company: 'Startup X',
        period: '2018 - 2021',
        bullets: [
            'Designed and implemented the core REST API using Python/Django for the flagship product.',
            'Managed deployment pipeline using Jenkins and Docker.',
        ],
        alignment: 'left',
    },
    {
        title: 'Junior Web Developer',
        company: 'Freelance',
        period: '2017 - 2018',
        bullets: [
            'Built small business websites using plain HTML, CSS, and basic JavaScript.',
        ],
        alignment: 'right',
    },
];

export const ACCENT_COLOR = '#238636'; // GitHub Green
