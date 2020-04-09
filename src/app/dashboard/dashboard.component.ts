import { Component, OnInit } from '@angular/core';
import { StatisticsServiceService } from '../services/statistics-service.service'
import { CounterCard } from '../components/counter-card/counter-card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private _statisticsService: StatisticsServiceService;

  public summary: CounterCard[] = [];

  constructor(private statisticsService: StatisticsServiceService) {
    this._statisticsService = statisticsService;
  }

  ngOnInit(): void {
    this._statisticsService.getSumamry()
    .subscribe(r => {
      this.summary.push({ label: 'New Deaths', value: r.NewDeaths, icon: 'procedures', color:'pink' } as CounterCard)
      this.summary.push({ label: 'New Cases', value: r.NewConfirmed, icon: 'virus', color:'yellow' } as CounterCard)
      this.summary.push({ label: 'New Recovered', value: r.NewRecovered, icon: 'clipboard-check', color:'teal' } as CounterCard)
      this.summary.push({ label: 'Total Deaths', value: r.TotalDeaths, icon: 'procedures', color:'red' } as CounterCard)
      this.summary.push({ label: 'Total Cases', value: r.TotalConfirmed, icon: 'viruses', color:'orange' } as CounterCard)
      this.summary.push({ label: 'Total Recorvered', value: r.TotalRecovered, icon: 'clipboard-check', color:'green' } as CounterCard)
    });
  }

}
