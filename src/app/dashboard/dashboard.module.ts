import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DashboardRouterModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    DashboardRouterModule
  ],
  declarations: [DashboardRouterModule.components]
})
export class DashboardModule { } 
