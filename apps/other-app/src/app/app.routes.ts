import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'account',
    loadComponent: () =>
      import('@bundleperf/shared/feature').then((c) => c.AccountComponent),
  },
];
