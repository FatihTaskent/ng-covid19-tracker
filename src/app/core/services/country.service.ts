import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  /**
   * Returns the saved countries
   */
  getCountries() : string[] {
    return Array.from(this.readStorage());
  }

  /**
   * Saves the country
   * @param country The country to add
   */
  addCountry(country: string) {
    let countries: Set<string> = this.readStorage();
    countries.add(country);
    this.saveToStorage(countries)
  }

  /**
   * Removes the country
   * @param country The country to remove
   */
  removeCountry(country: string) : boolean {
    let countries: Set<string> = this.readStorage();
    if(countries.delete(country)) {
      this.saveToStorage(countries);
      return true;
    }
    return false;
  }

  private getDefaultCountries() : Set<string> {
    return new Set(['china', 'netherlands', 'italy', 'turkey', 'france', 'spain']);
  }

  private saveToStorage(countries: Set<string>) {
    localStorage["Countries"] = JSON.stringify([...countries]);
  }

  private readStorage(): Set<string> {
    // if localStorage["Countries"] is undefined, load with default values
    if(!localStorage["Countries"]) {
      this.saveToStorage(this.getDefaultCountries());
    }

    return new Set(JSON.parse(localStorage["Countries"]));
  }

}
