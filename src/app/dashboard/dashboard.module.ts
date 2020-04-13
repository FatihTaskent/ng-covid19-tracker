import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRouterModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    ChartsModule,
    DashboardRouterModule
  ],
  declarations: [DashboardRouterModule.components]
})
export class DashboardModule { } 
