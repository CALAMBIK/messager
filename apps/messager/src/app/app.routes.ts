import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@messager/libs/root').then((c) => c.Pages),
  },
];
