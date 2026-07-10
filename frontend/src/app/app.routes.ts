import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },

  {
    path: 'login',
    component: Login
  },

  {
    path: '',
    component: DashboardLayout,
    children: [
      {
  path: 'dashboard',
  component: Dashboard,
  canActivate: [authGuard]
}
    ]
  }
];