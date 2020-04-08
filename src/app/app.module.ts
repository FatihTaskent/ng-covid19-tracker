import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryPanelComponent } from './country-panel/country-panel.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CountryPanelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
