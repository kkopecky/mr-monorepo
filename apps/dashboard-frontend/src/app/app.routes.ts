import { Route } from '@angular/router';
import {
  DashboardListComponent,
  DashboardViewComponent,
} from '@mr-monorepo/ui';

export const appRoutes: Route[] = [
  { path: 'dashboard', pathMatch: 'full', component: DashboardListComponent },
  {
    path: 'dashboard/:id',
    pathMatch: 'full',
    component: DashboardViewComponent,
  },
  { path: '**', redirectTo: 'dashboard' },
];
