import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

import { StatisticsService } from '../core/services/statistics.service';
import LineChart from './line-chart';
import { CovidDataModel } from '../core/models/covid-data-model';
import { CountryService } from '../core/services/country.service';

@Component({
  selector: 'app-compare-countries',
  templateUrl: './compare-countries.component.html'
})
export class CompareCountriesComponent implements OnInit {

  // chart objects
  public casesChart: LineChart = new LineChart();
  public deathsChart: LineChart = new LineChart();

  private _statisticsService: StatisticsService;
  private _countryService: CountryService;

  constructor(statisticsService: StatisticsService, countryService: CountryService) {
    this._statisticsService = statisticsService;
    this._countryService = countryService;
  }

  ngOnInit(): void {
    let countries = this._countryService.getCountries();

    // Get data for country
    combineLatest(this.getCasesForCountries(countries))
      .subscribe((cases) => this.fillChartData(cases, this.casesChart));

    combineLatest(this.getDeathForCountries(countries))
      .subscribe((deaths) => this.fillChartData(deaths, this.deathsChart));
  }

  /**
   * Fils the chart object with covid data
   * @param data An array of covid data per record (day) per country
   * @param chart The reference to the chart options object
   */
  private fillChartData(data : CovidDataModel[][], chart : LineChart) {
    // Reset data
    chart.lineChartSeries = [];

    // Set Y-axes by the amount of days of the longest coutnry
    let dayCount = data.reduce((a, b) => a.length > b.length ? a : b).length
    chart.lineChartLabels = [...Array(dayCount).keys()].map(m => m.toString());

    // Reset color index and create serie per country
    this.colorCounter = 0
    data.forEach(serie => {
      // skip country if no data exists
      if(serie.length > 0) {
        let color = this.popColor()
        chart.lineChartSeries.push(this.createSeries(serie, color[0], color[1]));
      }
    })
  }

  /**
   * Returns an array of observales for the covid-19 cases per country
   * @param countries the countries to get the cases for
   */
  private getCasesForCountries(countries: string[]) : Observable<CovidDataModel[]>[] {
    return countries.map(country => this._statisticsService.getCasesForCountry(country));
  }

  /**
   * Returns an array of observables for the death count per country
   * @param countries The countries to get the death count for
   */
  private getDeathForCountries(countries: string[]):  Observable<CovidDataModel[]>[] {
    return countries.map(country => this._statisticsService.getDeathsForCountry(country));
  }

  /**
   * Returns a serie including the data
   * @param data the Covid data 
   * @param backgroundColor The color to fill the line background
   * @param borderColor The color for the line
   */
  private createSeries(data: CovidDataModel[], backgroundColor: string, borderColor: string) {
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

  /** 
   * Returns a diffrent color from a set of colors each time this method is called 
   * */
  private popColor(): [string, string] {
    if (this.colorCounter == this.colors.length) {
      this.colorCounter = 0;
    }

    return this.colors[this.colorCounter++];
  }
  private colorCounter = 0;
  // Pre defined colors                 [bgColor, borderColor]
  private colors: [string, string][] = [["#fff5f5", "#e53e3e"],
                                        ["#fffaf0", "#dd6b20"],
                                        ["#f0fff4", "#38a169"],
                                        ["#fff5f7", "#d53f8c"],
                                        ["#faf5ff", "#9f7aea"],
                                        ["#f7fafc", "#a0aec0"],
                                        ["#fffaf0", "#ed8936"],
                                        ["#e6fffa", "#38b2ac"]]
}
