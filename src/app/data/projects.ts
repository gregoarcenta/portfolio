import { IProject, Technology } from '@/interfaces/project';

export const projects_en: IProject[] = [
  {
    id: '1',
    name: 'Real-time Chat Application',
    slug: 'real-time-chat',
    description:
      'A real-time chat application built using NestJS and React. It demonstrates the implementation of WebSocket communication for instant messaging. The project includes dynamic chat rooms, user connection status, and a modern responsive UI.',
    type: 'fullstack',
    images: [
      'fqr6zcippfdrmsksdnqy',
      'hcf0eqxkqal6v3nanhvo',
      'ooz2tdacfe3eetqww8rz',
    ],
    image_mobile: 'x5c5upw3bz80ocffqge1',
    url: 'https://chat-back-rho.vercel.app/',
    github_url: 'https://github.com/gregoarcenta/chat-back',
    backend_url: null,
    technologies: [
      Technology.REACT,
      Technology.TAILWIND,
      Technology.NEST,
      Technology.SOCKETIO,
    ],
    featuredFunctions: [
      'Real-time messaging using WebSockets',
      'User connection status',
      'Private and group chat rooms',
      'Responsive design for seamless use on any device',
    ],
  },
  {
    id: '2',
    name: 'Teslo Shop Backend',
    slug: 'teslo-shop-backend',
    description:
      'Teslo Shop is a backend application designed to efficiently manage an e-commerce store. It provides robust functionality for managing products, orders, and customers, including CRUD operations, secure authentication, and modern payment gateway integrations. Developed using NestJS with PostgreSQL as the database.',
    type: 'backend',
    images: [
      'a9i1pcioz6ih6wbw2fcr',
      'rbezwmog2qkqhq7aby5z',
      'qvtcbksm544kl5jormrc',
    ],
    image_mobile: null,
    url: 'https://teslo-shop-backend-dtjt.onrender.com/api',
    github_url: 'https://github.com/gregoarcenta/teslo-shop-backend',
    backend_url: null,
    technologies: [Technology.NEST, Technology.TS, Technology.POSTGRESQL],
    featuredFunctions: [
      'JWT authentication with support for roles (admin and customer)',
      'RESTful API to manage products and orders',
      'Fully functional shopping cart',
      'Stripe integration in test mode for payments',
      'API documentation generated with Swagger',
      'Configured and optimized PostgreSQL database',
    ],
  },
];

export const projects_es: IProject[] = [
  {
    id: '1',
    name: 'Aplicación de Chat en Tiempo Real',
    slug: 'real-time-chat',
    description:
      'Una aplicación de chat en tiempo real construida con NestJS y React. Demuestra la implementación de comunicación por WebSockets para mensajería instantánea. El proyecto incluye salas de chat dinámicas, estados de conexión de usuarios y una interfaz moderna y responsiva.',
    type: 'fullstack',
    images: [
      'fqr6zcippfdrmsksdnqy',
      'hcf0eqxkqal6v3nanhvo',
      'ooz2tdacfe3eetqww8rz',
    ],
    image_mobile: 'x5c5upw3bz80ocffqge1',
    url: 'https://chat-back-rho.vercel.app/',
    github_url: 'https://github.com/gregoarcenta/chat-back',
    backend_url: null,
    technologies: [
      Technology.REACT,
      Technology.TAILWIND,
      Technology.NEST,
      Technology.SOCKETIO,
    ],
    featuredFunctions: [
      'Mensajería en tiempo real utilizando WebSockets',
      'Estado de conexión de usuarios',
      'Salas de chat privadas y grupales',
      'Diseño responsivo para un uso fluido en cualquier dispositivo',
    ],
  },
  {
    id: '2',
    name: 'Teslo Shop Backend',
    slug: 'teslo-shop-backend',
    description:
      'Teslo Shop es una aplicación backend diseñada para gestionar eficientemente una tienda de comercio electrónico. Ofrece funcionalidades robustas para la administración de productos, pedidos y clientes, incluyendo operaciones CRUD, autenticación segura e integraciones modernas con pasarelas de pago. Desarrollada con NestJS y PostgreSQL como base de datos.',
    type: 'backend',
    images: [
      'a9i1pcioz6ih6wbw2fcr',
      'rbezwmog2qkqhq7aby5z',
      'qvtcbksm544kl5jormrc',
    ],
    image_mobile: null,
    url: 'https://teslo-shop-backend-dtjt.onrender.com/api',
    github_url: 'https://github.com/gregoarcenta/teslo-shop-backend',
    backend_url: null,
    technologies: [Technology.NEST, Technology.TS, Technology.POSTGRESQL],
    featuredFunctions: [
      'Autenticación JWT con soporte para roles (administrador y cliente)',
      'API RESTful para gestionar productos y órdenes de compra',
      'Carrito de compras completamente funcional',
      'Integración con Stripe en modo prueba para pagos',
      'Documentación de la API generada con Swagger',
      'Base de datos PostgreSQL configurada y optimizada',
    ],
  },
];
