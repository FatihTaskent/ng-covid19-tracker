import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../core/services/statistics.service';
import CountryModel from '../core/models/country-model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  public searchCountry = '';
  public availableCountries: CountryModel[] = [];
  public selectedCountries: CountryModel[] = [];

  private _statisticsService: StatisticsService;

  constructor(statisticsService: StatisticsService) {
    this._statisticsService = statisticsService;
  }

  ngOnInit(): void {
    this._statisticsService.getAvailableCountries()
      .subscribe(countries => countries.forEach(country => this.availableCountries.push(country) ));
  }

  get filteredCountries() {
    return this.availableCountries.filter(country => country.CountryName.toLowerCase().includes(this.searchCountry.toLowerCase()));
  }

  public addCountry(country: CountryModel) {
    // Add country if it does not exists yet
    if (this.selectedCountries.findIndex(f => f.FullName === country.FullName) === -1) {
        country.isSelected = true;
        this.selectedCountries.push(country);
    }
  }

  removeCountry(country: CountryModel) {
    if (this.selectedCountries.findIndex(f => f.FullName === country.FullName) === -1) {
      // the country is not selected yet
      return;
    }


  }

}
