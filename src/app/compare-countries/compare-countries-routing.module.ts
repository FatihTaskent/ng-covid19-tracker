import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompareCountriesComponent } from './compare-countries.component';

const routes: Routes = [{ path: '', component: CompareCountriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareCountriesRoutingModule { }
