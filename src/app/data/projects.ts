import { IProject, Technology } from '@/interfaces/project';

export const projects_en: IProject[] = [
  {
    id: '1',
    name: 'Calculator',
    slug: 'calculator',
    description:
      'A calculator built using the Angular framework (version 19 zoneless). It includes optimized functionality and responsive design.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/calculator',
    github_url: 'https://github.com/gregoarcenta/zoneless-calculator',
    technologies: [Technology.ANGULAR],
  },
  {
    id: '2',
    name: 'Teslo Shop',
    slug: 'teslo-shop',
    description:
      'Teslo Shop is a backend application designed to manage an e-commerce store. It includes basic CRUD operations, modern integrations, and security features. Developed using NestJS with PostgreSQL as the database.',
    type: 'backend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/teslo-shop',
    github_url: 'https://github.com/gregoarcenta/teslo-shop',
    technologies: [
      Technology.NEST,
      Technology.TS,
      Technology.HTML,
      Technology.POSTGRESQL,
    ],
  },
  {
    id: '3',
    name: 'Task Manager',
    slug: 'task-manager',
    description:
      'A web tool for managing tasks and projects. Built with Angular and NestJS, this application combines a dynamic frontend with a robust backend. It includes authentication and database management.',
    type: 'fullstack',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/task-manager',
    github_url: 'https://github.com/gregoarcenta/task-manager',
    technologies: [Technology.ANGULAR, Technology.NEST, Technology.TS],
  },
  {
    id: '4',
    name: 'E-commerce Dashboard',
    slug: 'e-commerce-dashboard',
    description:
      'A dashboard for managing an e-commerce platform. Built with React and Redux, it provides real-time data and analytics to help manage products and users.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/e-commerce-dashboard',
    github_url: 'https://github.com/gregoarcenta/e-commerce-dashboard',
    technologies: [Technology.REACT],
  },
  {
    id: '5',
    name: 'Weather App',
    slug: 'weather-app',
    description:
      'A simple weather application that provides real-time weather data using the OpenWeather API. Built with React and styled-components.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/weather-app',
    github_url: 'https://github.com/gregoarcenta/weather-app',
    technologies: [Technology.REACT],
  },
  {
    id: '6',
    name: 'Blog Platform',
    slug: 'blog-platform',
    description:
      'A full-stack blog platform that allows users to create, edit, and delete posts. Built with Express and MongoDB for the backend, and React for the frontend.',
    type: 'fullstack',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/blog-platform',
    github_url: 'https://github.com/gregoarcenta/blog-platform',
    technologies: [Technology.REACT],
  },
];

export const projects_es: IProject[] = [
  {
    id: '1',
    name: 'Calculadora',
    slug: 'calculator', // Mismo slug que en inglés
    description:
      'Una calculadora creada con el framework Angular (versión 19 zoneless). Incluye funcionalidad optimizada y diseño responsivo.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/calculator',
    github_url: 'https://github.com/gregoarcenta/zoneless-calculator',
    technologies: [Technology.ANGULAR],
  },
  {
    id: '2',
    name: 'Teslo Shop',
    slug: 'teslo-shop',
    description:
      'Teslo Shop es una aplicación backend diseñada para gestionar una tienda de comercio electrónico. Incluye operaciones CRUD básicas, integraciones modernas y seguridad. Desarrollada con NestJS y PostgreSQL como base de datos.',
    type: 'backend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/teslo-shop',
    github_url: 'https://github.com/gregoarcenta/teslo-shop',
    technologies: [
      Technology.NEST,
      Technology.TS,
      Technology.HTML,
      Technology.POSTGRESQL,
    ],
  },
  {
    id: '3',
    name: 'Gestión de tareas',
    slug: 'task-manager',
    description:
      'Una herramienta web para gestionar tareas y proyectos. Creada con Angular y NestJS, esta aplicación combina un frontend dinámico con un backend robusto. Incluye autenticación y manejo de base de datos.',
    type: 'fullstack',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/task-manager',
    github_url: 'https://github.com/gregoarcenta/task-manager',
    technologies: [Technology.ANGULAR, Technology.NEST, Technology.TS],
  },
  {
    id: '4',
    name: 'Panel de e-commerce',
    slug: 'e-commerce-dashboard',
    description:
      'Un panel para gestionar una plataforma de comercio electrónico. Creado con React y Redux, proporciona datos en tiempo real y análisis para gestionar productos y usuarios.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/e-commerce-dashboard',
    github_url: 'https://github.com/gregoarcenta/e-commerce-dashboard',
    technologies: [Technology.REACT],
  },
  {
    id: '5',
    name: 'Aplicación del clima',
    slug: 'weather-app',
    description:
      'Una simple aplicación del clima que proporciona datos meteorológicos en tiempo real usando la API de OpenWeather. Creada con React y styled-components.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/weather-app',
    github_url: 'https://github.com/gregoarcenta/weather-app',
    technologies: [Technology.REACT],
  },
  {
    id: '6',
    name: 'Plataforma de blog',
    slug: 'blog-platform',
    description:
      'Una plataforma de blog completa que permite a los usuarios crear, editar y eliminar publicaciones. Desarrollada con Express y MongoDB en el backend, y React en el frontend.',
    type: 'fullstack',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    url: 'https://arcentales.vercel.app/blog-platform',
    github_url: 'https://github.com/gregoarcenta/blog-platform',
    technologies: [Technology.REACT],
  },
];
