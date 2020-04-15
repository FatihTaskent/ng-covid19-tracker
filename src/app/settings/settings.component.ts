import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../core/services/statistics.service';
import CountryModel from '../core/models/country-model';
import { CountryService } from '../core/services/country.service';
import { flush } from '@angular/core/testing';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  public searchCountry = '';
  public availableCountries: CountryModel[] = [];
  public selectedCountries: CountryModel[] = [];

  private _statisticsService: StatisticsService;
  private _countryService: CountryService;

  constructor(statisticsService: StatisticsService, countryService: CountryService) {
    this._statisticsService = statisticsService;
    this._countryService = countryService;
  }

  ngOnInit(): void {
    // initialize lists
    let savedCoutnries = this._countryService.getCountries();

    this._statisticsService.getAvailableCountries()
      .subscribe(countries => countries.forEach(country => {
        if(savedCoutnries.includes(country.FullName)) {
          // flag country as already selected
          country.isSelected = true;

          // Add country to selected list
          this.selectedCountries.push(country);
        }

        // add to country list
        this.availableCountries.push(country) 
      }));
  }

  get filteredCountries() {
    return this.availableCountries.filter(country => country.CountryName.toLowerCase().includes(this.searchCountry.toLowerCase()));
  }

  public addCountry(country: CountryModel) {
    // Add country if it does not exists yet
    if (this.selectedCountries.findIndex(f => f.FullName === country.FullName) === -1) {
        country.isSelected = true;
        this.selectedCountries.push(country);
        this._countryService.addCountry(country.FullName)
    }
  }

  removeCountry(country: CountryModel) {
    if(this._countryService.removeCountry(country.FullName)) {
      let cIndex = this.selectedCountries.findIndex(f => f.FullName === country.FullName);
      this.selectedCountries.splice(cIndex, 1);
    }
  }
}
