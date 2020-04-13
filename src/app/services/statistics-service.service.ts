import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TotalStats } from '../models/TotalStats';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { CovidData } from '../models/coviddata';

@Injectable({
  providedIn: 'root'
})
export class StatisticsServiceService {

  private _httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this._httpClient = http;
  }

  /**
   * Returns the current total statistic globaly
   */
  getSumamry(): Observable<TotalStats> {
    return this._httpClient
      .get('https://api.covid19api.com/summary')
      .pipe(map(res => res["Global"] as TotalStats))
  }

  getCasesForCountry(country: string): Observable<CovidData[]> {
    return this._httpClient.get(`https://api.covid19api.com/total/dayone/country/${country}/status/confirmed`)
      .pipe(map(result => (<any[]>result).map(data => CovidData.FromData(data) )));
  }

  getDeathsForCountry(country: string): Observable<CovidData[]> {
    return this._httpClient.get(`https://api.covid19api.com/total/dayone/country/${country}/status/deaths`)
    .pipe(map(result => (<any[]>result).map(data => CovidData.FromData(data) )));
  }

  getRecoveredForCountry(country: string): Observable<CovidData[]> {
    return this._httpClient.get(`https://api.covid19api.com/total/dayone/country/${country}/status/deaths`)
    .pipe(map(result => (<any[]>result).map(data => CovidData.FromData(data) )));
  }
}