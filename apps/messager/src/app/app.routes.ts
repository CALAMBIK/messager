import { authGuard } from '@messager/libs/auth/auth-domain';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('@messager/libs/auth/auth-page').then((c) => c.AuthPage),
  },
  {
    path: '',
    loadComponent: () => import('@messager/libs/root').then((c) => c.Pages),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      {
        path: 'search',
        loadComponent: () =>
          import('@messager/libs/search/profile-list').then(
            (c) => c.ProfileList
          ),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('@messager/libs/chats').then((c) => c.Chats),
      },
    ],
    canActivate: [authGuard],
  },
];
