import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../core/services/statistics.service'
import { SummaryCard } from './summary-card/summary-card-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private _statisticsService: StatisticsService;

  public summary: SummaryCard[] = [];

  constructor(statisticsService: StatisticsService) {
    this._statisticsService = statisticsService;
  }

  ngOnInit(): void {
    this._statisticsService.getSumamry()
    .subscribe(r => {
      this.summary.push({ label: 'New Deaths', value: r.NewDeaths, icon: 'procedures', color:'pink' } as SummaryCard)
      this.summary.push({ label: 'New Cases', value: r.NewConfirmed, icon: 'head-side-mask', color:'yellow' } as SummaryCard)
      this.summary.push({ label: 'New Recovered', value: r.NewRecovered, icon: 'clipboard-check', color:'teal' } as SummaryCard)
      this.summary.push({ label: 'Total Deaths', value: r.TotalDeaths, icon: 'procedures', color:'red' } as SummaryCard)
      this.summary.push({ label: 'Total Cases', value: r.TotalConfirmed, icon: 'head-side-mask', color:'orange' } as SummaryCard)
      this.summary.push({ label: 'Total Recorvered', value: r.TotalRecovered, icon: 'clipboard-check', color:'green' } as SummaryCard)
    });
  }

}
