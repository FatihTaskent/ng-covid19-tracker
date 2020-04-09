export class CovidData {
    date: Date;
    cases: number;
    country: string;
  
    constructor(cases: number, date: Date, country: string) {
      this.cases = cases;
      this.date = date;
      this.country = country;
    }

    static FromData(data: object) : CovidData {
      return new CovidData(
        data['Cases'],
        new Date(data["Date"]),
        data['Country']
      );
    }
  }