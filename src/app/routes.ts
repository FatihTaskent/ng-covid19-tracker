import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompareCountriesComponent } from './compare-countries/compare-countries.component';


export const appRoutes:Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'compare', component: CompareCountriesComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]
