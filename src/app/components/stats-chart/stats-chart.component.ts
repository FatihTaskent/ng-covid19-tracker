import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartPoint } from 'chart.js';
import { StatisticsServiceService } from 'src/app/services/statistics-service.service';
import { CovidData } from '../../models/coviddata';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'stats-chart',
  templateUrl: './stats-chart.component.html',
})
export class StatsChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {label: "a", data: []},
    {label: "b", data: []}
  ];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    annotation: null,
    responsive: true,
    tooltips: { 
      mode: 'index', 
      intersect: false 
    },
    scales: {
      xAxes: [
        {
          display: false,
          type: 'time',
          time: {
            unit: 'week',
            tooltipFormat: 'll',
            displayFormats: {
              week: 'll'
            }
          }
        }
      ]
    }
  };
  public lineChartLegend = true;

  private _statisticsService: StatisticsServiceService;

  constructor(private statisticsService: StatisticsServiceService) {
    this._statisticsService = statisticsService;
   }

  ngOnInit(): void {
      // Get data for country
    combineLatest(
      this._statisticsService.getCasesForCountry(this.country),
      this._statisticsService.getDeathsForCountry(this.country)
    ).subscribe(([cases, deaths]) => {
      console.log(cases)
      this.lineChartData = [];
      this.lineChartData.push(this.createSeries("Deaths", deaths, "#e53e3e", "#fff5f5"));
      this.lineChartData.push(this.createSeries("Cases", cases, "#d69e2e", "#fffff0"));
    })
  }

  @Input() country: string;

  private createSeries(label: string, data: CovidData[] ,borderColor: string, backgroundColor: string) :ChartDataSets {
    return {
      label: label, 
      data: data.map(c => <ChartPoint>{x: c.date, y: c.cases}), 
      borderColor: borderColor,
      pointRadius: 2,
      pointBorderColor: borderColor,
      pointBackgroundColor: borderColor,
      backgroundColor: backgroundColor
    };
  }
}
