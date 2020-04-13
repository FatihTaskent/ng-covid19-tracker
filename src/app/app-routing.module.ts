import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import modules
import { DashboardModule } from './dashboard/dashboard.module';
import { CompareCountriesModule } from './compare-countries/compare-countries.module';

const appRoutes: Routes = [
    { path: 'dashboard', loadChildren: ()=> DashboardModule },
    { path: 'compare', loadChildren: () => CompareCountriesModule },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouterModule { }