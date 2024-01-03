import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'transactions',
    loadComponent: () =>
      import('@bundleperf/demo-app/feature').then(
        (c) => c.TransactionsComponent
      ),
  },
  {
    path: 'cards',
    loadComponent: () =>
      import('@bundleperf/demo-app/feature').then((c) => c.CardsComponent),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('@bundleperf/shared/feature').then((c) => c.AccountComponent),
  },
];
