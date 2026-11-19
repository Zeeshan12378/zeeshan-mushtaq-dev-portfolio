// All content is from Zeeshan Mushtaq's resume — nothing invented.

export const profile = {
  name: 'Zeeshan Mushtaq',
  role: 'Backend Engineer',
  stack: 'PHP & Laravel',
  location: 'Lahore, Pakistan',
  email: 'zeeshanmushtaqdev786@gmail.com',
  phone: '+92 331 7878872',
  linkedin: 'https://linkedin.com/in/zeeshan-mushtaq-dev',
  github: 'https://github.com/Zeeshan12378',
  website: 'https://zeeshanmushtaq.vercel.app',
  resume: '/Zeeshan_Mushtaq_Resume.pdf',
  summary:
    'Backend Engineer with 3+ years of experience building scalable PHP and Laravel applications for recruitment, healthcare, and education platforms. Specialized in multi-role systems, RBAC, REST APIs, AI-powered features, Stripe subscription billing, real-time notifications (WebSockets, FCM), and MySQL optimization. Improved API response times by 30% and deploy production Laravel applications on Ubuntu with Nginx, Redis, and Supervisor.',
}

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '3+', label: 'Years experience' },
  { value: '30%', label: 'Faster APIs' },
  { value: '50+', label: 'Recruiters served' },
  { value: '15%', label: 'Fewer auth failures' },
]

export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    skills: [
      'PHP',
      'Laravel',
      'RESTful APIs',
      'Laravel Reverb',
      'WebSockets',
      'Firebase Cloud Messaging (FCM)',
      'Queues & Jobs',
      'Task Scheduling',
      'Authentication & Authorization',
      'RBAC',
      'AI-Powered Features',
      'Stripe Payment Gateway',
      'Subscription Billing',
      'CodeIgniter',
      'Core PHP',
    ],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'Query Optimization', 'Database Design'],
  },
  {
    title: 'Frontend',
    skills: [
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'React.js (basic)',
      'Livewire',
      'Alpine.js',
      'Inertia.js',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Linux (Ubuntu)', 'Nginx', 'Supervisor', 'Git', 'GitHub', 'Postman', 'AWS EC2 (basic)'],
  },
]

export interface Service {
  title: string
  description: string
  tags: string[]
}

export const services: Service[] = [
  {
    title: 'SaaS Backend',
    description:
      'Multi-role SaaS platforms in Laravel — Seeker, Employer and Admin sides with secure authentication and role-based authorization.',
    tags: ['Laravel', 'RBAC', 'Multi-role'],
  },
  {
    title: 'REST API & Optimisation',
    description:
      'Service-based REST APIs with MySQL query optimisation — API response times improved by 30% and auth failures cut by 15%.',
    tags: ['REST APIs', 'MySQL', 'Performance'],
  },
  {
    title: 'Real-Time Features',
    description:
      'Real-time notifications and live updates with Laravel Reverb, WebSockets and Firebase Cloud Messaging.',
    tags: ['Reverb', 'WebSockets', 'FCM'],
  },
  {
    title: 'Payments & Integrations',
    description:
      'Stripe payment and billing modules — tiered subscriptions (Starter, Growth, Pro) and pay-per-use add-ons.',
    tags: ['Stripe', 'Subscriptions', 'Billing'],
  },
  {
    title: 'Full-Stack Delivery',
    description:
      'Full-stack client applications with Core PHP, Laravel, Livewire and Inertia.js, plus Bootstrap and jQuery front-ends.',
    tags: ['Laravel', 'Livewire', 'Inertia.js'],
  },
  {
    title: 'AI-Powered Features',
    description:
      'AI-powered resume suggestions and AI-driven job / candidate matching inside production Laravel applications.',
    tags: ['AI features', 'Matching', 'Laravel'],
  },
]

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Backend Engineer',
    company: 'Acrosoft',
    location: 'Lahore, Pakistan',
    period: 'Aug 2024 – Present',
    points: [
      'Architected multi-role recruitment and resume-management platforms (Seeker, Employer, Admin) in Laravel with secure authentication, role-based authorization, and real-time notifications via Laravel Reverb, WebSockets, and FCM.',
      'Built service-based REST APIs powering dynamic resume generation for 50+ recruiters; developed AI-powered resume suggestions and AI-driven job/candidate matching.',
      'Built a complete Stripe payment and billing module for JumpRecruiter.com with tiered employer subscriptions (Starter, Growth, Pro) and pay-per-use add-ons.',
      'Optimized MySQL queries and API logic, improving API response times by 30% and cutting authentication failures by 15%.',
      'Deployed and maintained production Ubuntu servers (Nginx, Redis, Supervisor) for reliable queues, scheduled jobs, and email delivery; tested APIs with Postman.',
    ],
  },
  {
    role: 'Laravel Developer',
    company: 'Crexed',
    location: 'Bahawalpur, Pakistan',
    period: 'Jul 2023 – Jul 2024',
    points: [
      'Led backend API development for healthcare, legal, education, LMS, and CMS platforms with secure RBAC and optimized MySQL queries.',
      'Delivered three production-ready admin dashboards for multi-department organizations.',
      'Built queue-driven email and notification systems and responsive Bootstrap/jQuery interfaces, with React.js components for selected modules; managed Linux deployments (Nginx, MySQL, Redis).',
    ],
  },
  {
    role: 'Web Developer / PHP Developer',
    company: 'Codelab IT Solutions',
    location: 'Bahawalpur, Pakistan',
    period: 'Feb 2022 – Jan 2023',
    points: [
      'Delivered full-stack client applications using Core PHP, Laravel, Livewire, and Inertia.js with MySQL; integrated REST APIs with Bootstrap and jQuery front-ends.',
      'Migrated multiple legacy Core PHP projects to Laravel MVC, improving maintainability, security, and performance.',
    ],
  },
]

export interface Project {
  name: string
  company: string
  stack: string
  url: string
  description: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    name: 'JumpRecruiter.com',
    company: 'Acrosoft',
    stack: 'Laravel, MySQL, Reverb, FCM, Stripe',
    url: 'https://jumprecruiter.com',
    description:
      'Multi-role recruitment platform with AI-driven candidate matching and dynamic resume generation.',
    highlights: [
      'Multi-role dashboards (Seeker, Employer, Admin)',
      'Real-time notifications',
      'Stripe subscription plans with usage limits',
      'Pay-per-use unlocks (candidate profiles, 20 extra applicants per job)',
      'AI-driven candidate matching',
    ],
  },
  {
    name: 'JumpResumeBuilder.com',
    company: 'Acrosoft',
    stack: 'Laravel, MySQL, REST APIs',
    url: 'https://jumpresumebuilder.com',
    description: 'Resume builder with AI-powered content suggestions and ATS-friendly templates.',
    highlights: ['AI-powered content suggestions', 'ATS-friendly templates', 'PDF / Word export'],
  },
  {
    name: 'ImperialLocum.com',
    company: 'Acrosoft',
    stack: 'Laravel',
    url: 'https://imperiallocum.com',
    description: 'Healthcare staffing website.',
    highlights: ['Healthcare staffing', 'Laravel'],
  },
  {
    name: 'IntuitiveHealthServices.com',
    company: 'Acrosoft',
    stack: 'Laravel',
    url: 'https://intuitivehealthservices.com',
    description: 'Healthcare staffing website.',
    highlights: ['Healthcare staffing', 'Laravel'],
  },
  {
    name: 'ForAllDoctors.com',
    company: 'Crexed',
    stack: 'Laravel, MySQL',
    url: 'https://foralldoctors.com',
    description: 'Healthcare platform with blogs, classifieds, forums and chat.',
    highlights: [
      'Blogs, articles, classifieds, forums',
      'Chat system',
      'Doctor / hospital / official profiles',
      'Role-based sides, admin panel, advanced filters',
    ],
  },
  {
    name: 'HowTests.com',
    company: 'Crexed',
    stack: 'Laravel',
    url: 'https://howtests.com',
    description: 'Online testing platform used by 500+ students.',
    highlights: ['Excel import', 'Auto-scoring', 'Analytics', 'PDF reports', 'Used by 500+ students'],
  },
  {
    name: 'Industrial Inventory System',
    company: 'Crexed',
    stack: 'Laravel, MySQL',
    url: 'https://github.com/Zeeshan12378',
    description: 'Warehouse inventory system that improved warehouse efficiency by 20%.',
    highlights: ['Improved warehouse efficiency by 20%', 'Laravel', 'MySQL'],
  },
]

export interface ArchitectureCard {
  title: string
  description: string
  flow: string[]
  tags: string[]
}

export const architecture: ArchitectureCard[] = [
  {
    title: 'SaaS Architecture',
    description:
      'Multi-tenant SaaS platforms with tiered subscriptions, usage limits and pay-per-use add-ons.',
    flow: ['Client', 'Laravel API', 'Services', 'MySQL / Redis'],
    tags: ['Multi-tenant', 'Subscriptions', 'Laravel'],
  },
  {
    title: 'Backend Architecture',
    description:
      'Service-based backend with clean separation — controllers stay thin, services hold the logic.',
    flow: ['Controller', 'Service', 'Repository', 'Database'],
    tags: ['Service layer', 'Repository', 'SOLID'],
  },
  {
    title: 'AI-Powered Architecture',
    description:
      'AI-powered features inside Laravel apps — resume suggestions and job / candidate matching.',
    flow: ['Laravel', 'AI service', 'Matching', 'Response'],
    tags: ['AI features', 'Matching', 'Laravel'],
  },
  {
    title: 'Real-Time Architecture',
    description: 'Live notifications and updates with Reverb, WebSockets and FCM.',
    flow: ['Event', 'Reverb', 'WebSocket', 'FCM'],
    tags: ['Reverb', 'WebSockets', 'FCM'],
  },
  {
    title: 'REST API Architecture',
    description:
      'Service-based REST APIs with authentication, RBAC and optimized queries — 30% faster responses.',
    flow: ['Request', 'Auth / RBAC', 'Service', 'JSON response'],
    tags: ['REST APIs', 'RBAC', 'MySQL'],
  },
  {
    title: 'Payments & Billing Architecture',
    description: 'Stripe billing with tiered plans, usage limits and pay-per-use unlocks.',
    flow: ['Checkout', 'Stripe', 'Webhook', 'Subscription'],
    tags: ['Stripe', 'Webhooks', 'Billing'],
  },
]

export const architecturePrinciples: string[] = [
  'Multi-role systems with RBAC',
  'Service-based APIs, thin controllers',
  'Queues for email, notifications and jobs',
  'MySQL query optimisation first',
  'Production deploys on Ubuntu, Nginx, Redis, Supervisor',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
]
