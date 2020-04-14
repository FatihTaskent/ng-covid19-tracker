import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareCountriesRoutingModule } from './compare-countries-routing.module';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    CompareCountriesRoutingModule
  ],
  declarations: [CompareCountriesRoutingModule.components],
})
export class CompareCountriesModule {}
