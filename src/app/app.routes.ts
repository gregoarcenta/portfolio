import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('@/pages/home/home.component'),
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () => import('@/pages/contact/contact.component'),
  },
  {
    path: 'projects',
    title: 'Projects',
    loadComponent: () => import('@/pages/projects/projects.component'),
  },
  {
    path: 'projects/:slug-project-name',
    title: 'Projects',
    loadComponent: () => import('@/pages/projects/projects.component'),
  },
  {
    path: '**',
    redirectTo: () => 'home',
  },
];
