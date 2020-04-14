import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SummaryModel } from '../models/summary-model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { CovidDataModel } from '../models/covid-data-model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsServiceService {

  private _httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this._httpClient = http;
  }

  /**
   * Returns the summary of the global covid-19 statistics
   */
  getSumamry(): Observable<SummaryModel> {
    return this._httpClient
      .get('https://api.covid19api.com/summary')
      .pipe(map(res => res["Global"] as SummaryModel))
  }

  /**
   * Returns the amount of cases since day one the first covid-19 case was confirmed
   * @param country The country to get the data for
   */
  getCasesForCountry(country: string): Observable<CovidDataModel[]> {
    return this._httpClient.get(`https://api.covid19api.com/total/dayone/country/${country}/status/confirmed`)
      .pipe(map(result => (<any[]>result).map(data => CovidDataModel.FromData(data) )));
  }

  /**
   * Returns the amount of deaths since day one the first death victem of covid-19 was confirmed
   * @param country The country to the the data for
   */
  getDeathsForCountry(country: string): Observable<CovidDataModel[]> {
    return this._httpClient.get(`https://api.covid19api.com/total/dayone/country/${country}/status/deaths`)
    .pipe(map(result => (<any[]>result).map(data => CovidDataModel.FromData(data) )));
  }

  /**
   * Returns the amount of recovered patients since day one of covid-19 was confirmed
   * @param country The country to get the data for
   */
  getRecoveredForCountry(country: string): Observable<CovidDataModel[]> {
    return this._httpClient.get(`https://api.covid19api.com/total/dayone/country/${country}/status/deaths`)
    .pipe(map(result => (<any[]>result).map(data => CovidDataModel.FromData(data) )));
  }
}