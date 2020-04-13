import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareCountriesRoutingModule } from './compare-countries-routing.module';
import { CompareCountriesComponent } from './compare-countries.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    CompareCountriesRoutingModule
  ],
  declarations: [CompareCountriesComponent],
})
export class CompareCountriesModule {}
