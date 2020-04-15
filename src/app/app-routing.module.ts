import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import modules
import { DashboardModule } from './dashboard/dashboard.module';
import { CompareCountriesModule } from './compare-countries/compare-countries.module';
import { SettingsModule } from './settings/settings.module';

const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: ()=> DashboardModule },
    { path: 'compare', loadChildren: () => CompareCountriesModule },
    { path: 'settings', loadChildren: () => SettingsModule },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], 
    exports: [RouterModule]
})
export class AppRouterModule { }