import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterCardComponent } from './components/counter-card/counter-card.component'
import { NavComponent } from './nav/nav.component';
import { StatsChartComponent } from './components/stats-chart/stats-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    CounterCardComponent,
    StatsChartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
