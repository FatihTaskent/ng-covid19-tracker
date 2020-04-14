import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

export default class LineChart {

    // Line chart series
    public lineChartSeries: ChartDataSets[] = [{ label: "Country", data: [] }];

    // Y-Axe labels
    public lineChartLabels: Label[] = []

    // Default Chart js line options
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
      annotation: null,
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: 'index',
        intersect: false
      }
    };
}