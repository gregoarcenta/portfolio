type ProjectType = 'frontend' | 'backend' | 'mobile' | 'fullstack' | 'other';

export enum Technology {
  HTML = 'HTML',
  CSS = 'CSS',
  TAILWIND = 'Tailwind',
  BOOTSTRAP = 'Bootstrap',
  JS = 'JavaScript',
  TS = 'TypeScript',
  REACT = 'React',
  ANGULAR = 'Angular',
  SOCKETIO = 'Socket.IO',
  NODE = 'Node Js',
  NEST = 'Nest Js',
  JAVA = 'Java',
  POSTGRESQL = 'PostgreSQL',
}

export interface IProject {
  id: string;
  images: string[];
  image_mobile: string;
  name: string;
  slug: string;
  description: string;
  type: ProjectType;
  technologies: Technology[];
  featuredFunctions: string[];
  url: string;
  github_url: string;
  backend_url: string | null;
}

export const technologyClasses: Record<Technology, string> = {
  [Technology.HTML]:
    'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300',
  [Technology.CSS]:
    'bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300',
  [Technology.TAILWIND]:
    'bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300',
  [Technology.BOOTSTRAP]:
    'bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300',
  [Technology.JS]:
    'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300',
  [Technology.TS]:
    'bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300',
  [Technology.REACT]:
    'bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300',
  [Technology.ANGULAR]:
    'bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300',
  [Technology.SOCKETIO]:
    'bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300',
  [Technology.NODE]:
    'bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300',
  [Technology.NEST]:
    'bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300',
  [Technology.JAVA]:
    'bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300',
  [Technology.POSTGRESQL]:
    'bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300',
};
