import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


export const appRoutes:Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]
