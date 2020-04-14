export class CovidDataModel {
  date: Date;
  cases: number;
  country: string;

  constructor(cases: number, date: Date, country: string) {
    this.cases = cases;
    this.date = date;
    this.country = country;
  }

  static FromData(data: object): CovidDataModel {
    return new CovidDataModel(
      data['Cases'], 
      new Date(data["Date"]), 
      data['Country']);
  }
}