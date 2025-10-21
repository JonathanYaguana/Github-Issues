import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'issues',
    loadComponent: () => import('./modules/issues/pages/issues-list-page/issues-list-page.component'),
  },
  {
    path: 'issues/:number',
    loadComponent: () => import('./modules/issues/pages/issues-page/issues-page.component'),
  },
  {
    path: '**',
    redirectTo: 'issues',
  },
];
