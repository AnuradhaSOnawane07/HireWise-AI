import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';
import { ResumeUpload } from './pages/resume-upload/resume-upload';
import { ResumeAnalysis } from './pages/resume-analysis/resume-analysis';
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
    path: 'register',
    component: Register
  },

  {
    path: '',
    component: DashboardLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
      },

      {
  path: 'resume-upload',
  component: ResumeUpload,
  canActivate: [authGuard]
},
{
    path:'resume-analysis',
    component:ResumeAnalysis,
    canActivate:[authGuard]
}
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  },

  

];