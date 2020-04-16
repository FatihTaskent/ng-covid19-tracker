import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../core/services/statistics.service'
import { SummaryCard } from './summary-card/summary-card-model';
import { CountryService } from '../core/services/country.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public summary: SummaryCard[] = [];
  public countries : string[] = [];

  private _statisticsService: StatisticsService;
  private _countryService: CountryService;

  constructor(statisticsService: StatisticsService, countryService: CountryService) {
    this._statisticsService = statisticsService;
    this._countryService = countryService;
  }

  ngOnInit(): void {
    // Init summary
    this._statisticsService.getSumamry()
    .subscribe(r => {
      this.summary.push({ label: 'New Deaths', value: r.NewDeaths, icon: 'procedures', color:'pink' } as SummaryCard)
      this.summary.push({ label: 'New Cases', value: r.NewConfirmed, icon: 'head-side-mask', color:'yellow' } as SummaryCard)
      this.summary.push({ label: 'New Recovered', value: r.NewRecovered, icon: 'clipboard-check', color:'teal' } as SummaryCard)
      this.summary.push({ label: 'Total Deaths', value: r.TotalDeaths, icon: 'procedures', color:'red' } as SummaryCard)
      this.summary.push({ label: 'Total Cases', value: r.TotalConfirmed, icon: 'head-side-mask', color:'orange' } as SummaryCard)
      this.summary.push({ label: 'Total Recorvered', value: r.TotalRecovered, icon: 'clipboard-check', color:'green' } as SummaryCard)
    });

    // Get countries
    this.countries = this._countryService.getCountries()
  }

  

}
