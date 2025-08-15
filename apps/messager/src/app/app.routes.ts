import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@messager/libs/root').then((c) => c.Pages),

    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadComponent: () =>
          import('@messager/libs/home/profile-list').then((c) => c.ProfileList),
      },
    ],
  },
];
