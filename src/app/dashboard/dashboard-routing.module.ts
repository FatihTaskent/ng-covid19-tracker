import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { StatsChartComponent } from './stats-chart/stats-chart.component';
import { CounterCardComponent } from './counter-card/counter-card.component';

const routes: Routes = [
    { path: '', component: DashboardComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRouterModule { 
    static components = [ DashboardComponent, StatsChartComponent, CounterCardComponent ] 
} 
