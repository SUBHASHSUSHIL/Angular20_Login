import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
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
        component: Layout,
        canActivate: [authGuard], // Using authGuard to protect the layout route
        children: [
            {
                path: 'dashboard',
                component: Dashboard
                //canDeactivate: [authGuard] // Using authGuard to protect the dashboard route
            }
        ]
    }
];
