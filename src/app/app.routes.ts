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
    path: 'projects/:slug',
    loadComponent: () => import('@/pages/project/project.component'),
  },
  {
    path: '**',
    redirectTo: () => 'home',
  },
];
