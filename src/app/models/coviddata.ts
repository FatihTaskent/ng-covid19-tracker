export class CovidData {
    date: Date;
    cases: number;
  
    constructor(cases: number, date: Date) {
      this.cases = cases;
      this.date = date;
    }
  }