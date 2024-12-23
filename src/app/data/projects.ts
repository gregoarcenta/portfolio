import { IProject, Technology } from '@/interfaces/project';

export const projects_en: IProject[] = [
  {
    id: '1',
    name: 'Calculator',
    slug: 'calculator',
    description:
      'A fully functional calculator built using the Angular framework (version 19 zoneless). This project showcases the implementation of zoneless change detection for optimized performance. It includes essential calculator functionalities, an intuitive user interface, and a responsive design to ensure compatibility across devices.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/calculator',
    github_url: 'https://github.com/gregoarcenta/zoneless-calculator',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.ANGULAR],
    featuredFunctions: [
      'Optimized zoneless change detection for faster performance',
      'Basic arithmetic functions: addition, subtraction, multiplication, division',
      'Responsive design for use across all devices',
      'User-friendly and intuitive UI with keyboard support',
    ],
  },
  {
    id: '2',
    name: 'Teslo Shop',
    slug: 'teslo-shop',
    description:
      'Teslo Shop is a backend application designed to efficiently manage an e-commerce store. It provides robust functionality for managing products, orders, and customers, including CRUD operations, secure authentication, and modern payment gateway integrations. Developed using NestJS with PostgreSQL as the database, this project highlights scalability and security best practices.',
    type: 'backend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/teslo-shop',
    github_url: 'https://github.com/gregoarcenta/teslo-shop',
    backend_url: 'https://pokeapi.co/',
    technologies: [
      Technology.NEST,
      Technology.TS,
      Technology.HTML,
      Technology.POSTGRESQL,
    ],
    featuredFunctions: [
      'Product and inventory management with CRUD operations',
      'Secure user authentication using JWT',
      'Payment gateway integration for seamless transactions',
      'Order tracking and customer management features',
    ],
  },
  {
    id: '3',
    name: 'Task Manager',
    slug: 'task-manager',
    description:
      'A powerful web tool for managing tasks and projects. Built with Angular and NestJS, this application combines a dynamic and visually appealing frontend with a robust backend. It includes user authentication, task categorization, deadlines, and database management to help users streamline their workflows.',
    type: 'fullstack',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/task-manager',
    github_url: 'https://github.com/gregoarcenta/task-manager',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.ANGULAR, Technology.NEST, Technology.TS],
    featuredFunctions: [
      'User authentication and task categorization',
      'Task management with deadlines and priority setting',
      'Data storage in a relational database',
      'Responsive and intuitive design for easy task tracking',
    ],
  },
  {
    id: '4',
    name: 'E-commerce Dashboard',
    slug: 'e-commerce-dashboard',
    description:
      'An interactive and responsive dashboard for managing an e-commerce platform. Developed with React and Redux, it provides administrators with real-time insights and analytics, including product and user management features. The project also includes data visualization components for easy decision-making.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/e-commerce-dashboard',
    github_url: 'https://github.com/gregoarcenta/e-commerce-dashboard',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.REACT],
    featuredFunctions: [
      'Real-time product and user analytics',
      'Data visualization components (charts, graphs)',
      'Manage product inventory and customer data',
      'User-friendly dashboard with role-based access',
    ],
  },
  {
    id: '5',
    name: 'Weather App',
    slug: 'weather-app',
    description:
      'A user-friendly weather application that provides real-time weather data for any location. Built using React and styled-components, this project showcases modern UI design and API integration. Users can view temperature, humidity, wind speed, and a five-day forecast, making it an essential tool for everyday weather tracking.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/weather-app',
    github_url: 'https://github.com/gregoarcenta/weather-app',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.REACT],
    featuredFunctions: [
      'Real-time weather data integration from external APIs',
      'Temperature, humidity, wind speed, and five-day forecast',
      'Responsive and modern UI design',
      'Location-based weather updates for any city',
    ],
  },
  {
    id: '6',
    name: 'Blog Platform',
    slug: 'blog-platform',
    description:
      'A full-stack blog platform that allows users to create, edit, and delete posts with ease. Built with Express and MongoDB for the backend, and React for the frontend, it includes features such as user authentication, content moderation, and responsive design. This project demonstrates the seamless integration of frontend and backend technologies.',
    type: 'fullstack',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/blog-platform',
    github_url: 'https://github.com/gregoarcenta/blog-platform',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.REACT],
    featuredFunctions: [
      'User authentication for secure access',
      'Post creation, editing, and deletion',
      'Content moderation and comment management',
      'Responsive design for a seamless reading experience',
    ],
  },
];

export const projects_es: IProject[] = [
  {
    id: '1',
    name: 'Calculadora',
    slug: 'calculator',
    description:
      'Una calculadora completamente funcional creada con el framework Angular (versión 19 zoneless). Este proyecto implementa detección de cambios sin zona para un rendimiento optimizado. Incluye funcionalidades esenciales de calculadora, una interfaz intuitiva y un diseño responsivo que asegura compatibilidad en múltiples dispositivos.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/calculator',
    github_url: 'https://github.com/gregoarcenta/zoneless-calculator',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.ANGULAR],
    featuredFunctions: [
      'Detección de cambios sin zona para un rendimiento optimizado',
      'Funciones básicas de cálculo: suma, resta, multiplicación, división',
      'Diseño responsivo para todos los dispositivos',
      'Interfaz fácil de usar con soporte para teclado',
    ],
  },
  {
    id: '2',
    name: 'Teslo Shop',
    slug: 'teslo-shop',
    description:
      'Teslo Shop es una aplicación backend diseñada para gestionar eficientemente una tienda de comercio electrónico. Ofrece funcionalidades robustas para la administración de productos, pedidos y clientes, incluyendo operaciones CRUD, autenticación segura e integraciones modernas con pasarelas de pago. Desarrollada con NestJS y PostgreSQL como base de datos, este proyecto destaca por sus prácticas de escalabilidad y seguridad.',
    type: 'backend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/teslo-shop',
    github_url: 'https://github.com/gregoarcenta/teslo-shop',
    backend_url: 'https://pokeapi.co/',
    technologies: [
      Technology.NEST,
      Technology.TS,
      Technology.HTML,
      Technology.POSTGRESQL,
    ],
    featuredFunctions: [
      'Gestión de productos e inventarios con operaciones CRUD',
      'Autenticación de usuarios segura con JWT',
      'Integración con pasarelas de pago',
      'Seguimiento de pedidos y gestión de clientes',
    ],
  },
  {
    id: '3',
    name: 'Gestión de tareas',
    slug: 'task-manager',
    description:
      'Una herramienta web potente para gestionar tareas y proyectos. Creada con Angular y NestJS, esta aplicación combina un frontend dinámico y visualmente atractivo con un backend robusto. Incluye autenticación de usuarios, categorización de tareas, manejo de fechas límite y gestión de bases de datos para ayudar a los usuarios a optimizar su flujo de trabajo.',
    type: 'fullstack',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/task-manager',
    github_url: 'https://github.com/gregoarcenta/task-manager',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.ANGULAR, Technology.NEST, Technology.TS],
    featuredFunctions: [
      'Autenticación de usuarios y categorización de tareas',
      'Gestión de tareas con fechas límite y prioridades',
      'Almacenamiento de datos en base de datos relacional',
      'Diseño responsivo para un fácil seguimiento de tareas',
    ],
  },
  {
    id: '4',
    name: 'Panel de e-commerce',
    slug: 'e-commerce-dashboard',
    description:
      'Un panel interactivo y responsivo para gestionar una plataforma de comercio electrónico. Desarrollado con React y Redux, proporciona información en tiempo real y análisis detallados para la gestión de productos y usuarios. El proyecto incluye componentes de visualización de datos que facilitan la toma de decisiones.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/e-commerce-dashboard',
    github_url: 'https://github.com/gregoarcenta/e-commerce-dashboard',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.REACT],
    featuredFunctions: [
      'Análisis en tiempo real de productos y usuarios',
      'Componentes de visualización de datos (gráficos, tablas)',
      'Gestión de inventarios y datos de clientes',
      'Dashboard intuitivo con acceso basado en roles',
    ],
  },
  {
    id: '5',
    name: 'Aplicación del clima',
    slug: 'weather-app',
    description:
      'Una aplicación de clima fácil de usar que proporciona datos meteorológicos en tiempo real para cualquier ubicación. Desarrollada con React y styled-components, este proyecto demuestra un diseño de interfaz moderna e integración con API. Los usuarios pueden consultar la temperatura, humedad, velocidad del viento y un pronóstico de cinco días, convirtiéndola en una herramienta práctica para el día a día.',
    type: 'frontend',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/weather-app',
    github_url: 'https://github.com/gregoarcenta/weather-app',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.REACT],
    featuredFunctions: [
      'Integración de datos meteorológicos en tiempo real desde APIs',
      'Temperatura, humedad, velocidad del viento y pronóstico de cinco días',
      'Diseño responsivo y moderno',
      'Actualización del clima basada en ubicación',
    ],
  },
  {
    id: '6',
    name: 'Plataforma de blog',
    slug: 'blog-platform',
    description:
      'Una plataforma de blog completa que permite a los usuarios crear, editar y eliminar publicaciones de manera sencilla. Desarrollada con Express y MongoDB en el backend, y React en el frontend, incluye características como autenticación de usuarios, moderación de contenido y diseño responsivo. Este proyecto destaca por la integración fluida entre tecnologías de frontend y backend.',
    type: 'fullstack',
    images: [
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg',
    ],
    image_mobile:
      'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
    url: 'https://arcentales.vercel.app/blog-platform',
    github_url: 'https://github.com/gregoarcenta/blog-platform',
    backend_url: 'https://pokeapi.co/',
    technologies: [Technology.REACT],
    featuredFunctions: [
      'Autenticación de usuarios para acceso seguro',
      'Creación, edición y eliminación de publicaciones',
      'Moderación de contenido y gestión de comentarios',
      'Diseño responsivo para una experiencia de lectura fluida',
    ],
  },
];
