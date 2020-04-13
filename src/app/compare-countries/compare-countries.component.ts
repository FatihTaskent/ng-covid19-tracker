import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartDataSets } from 'chart.js';

import { StatisticsServiceService } from '../services/statistics-service.service';
import { CovidData } from '../models/coviddata';

@Component({
  selector: 'app-compare-countries',
  templateUrl: './compare-countries.component.html'
})
export class CompareCountriesComponent implements OnInit {
  // Pre defined colors         [bgColor, borderColor]
  private colors: [string, string][] = [["#fff5f5", "#e53e3e"],
                                        ["#fffaf0", "#dd6b20"],
                                        ["#f0fff4", "#38a169"],
                                        ["#fff5f7", "#d53f8c"],
                                        ["#faf5ff", "#9f7aea"],
                                        ["#f7fafc", "#a0aec0"],
                                        ["#fffaf0", "#ed8936"],
                                        ["#e6fffa", "#38b2ac"]]
  public lineChartData: ChartDataSets[] = [
    { label: "Country", data: [] }
  ];
  public lineChartLabels: Label[] = []
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    annotation: null,
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'index',
      intersect: false
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
      this._statisticsService.getCasesForCountry('china'),
      this._statisticsService.getCasesForCountry('netherlands'),
      this._statisticsService.getCasesForCountry('united-states'),
      this._statisticsService.getCasesForCountry('italy'),
      this._statisticsService.getCasesForCountry('turkey'),
      this._statisticsService.getCasesForCountry('france'),
    )
      // add incremental number to display first case occurance for 
      //.pipe(map(series => series.map(serie => serie.map((elem, i) => <any>{index: i, ...elem}))))
      .subscribe((series) => {
        // reset chart
        this.lineChartData = [];

        // Set yaxe labels to the longest series
        let itemCount = series.reduce((a, b) => a.length > b.length ? a : b).length
        this.lineChartLabels = [...Array(itemCount).keys()].map(m => m.toString());

        // draw each serie
        series.forEach(serie => {
          let color = this.popColor()
          this.lineChartData.push(this.createSeries(serie, color[0], color[1]));
        })
      })
  }

  private colorCounter = 0;
  private popColor(): [string, string] {
    if (this.colorCounter == this.colors.length) {
      this.colorCounter = 0;
    }

    return this.colors[++this.colorCounter];
  }


  private createSeries(data: CovidData[], backgroundColor: string, borderColor: string): ChartDataSets {
    return {
      label: data[0].country,
      data: data.map(c => c.cases),
      borderColor: borderColor,
      pointRadius: 2,
      pointBorderColor: borderColor,
      pointBackgroundColor: borderColor,
      backgroundColor: backgroundColor
    };
  }
}
