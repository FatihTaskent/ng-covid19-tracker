import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    AppRouterModule
  ], 
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
