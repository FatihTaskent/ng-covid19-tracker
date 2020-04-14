import { Component, OnInit, Input } from '@angular/core';
import { SummaryCard } from './summary-card-model';

@Component({
  selector: 'counter-card',
  templateUrl: './summary-card.component.html'
})
export class SummaryCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() counter: SummaryCard

}
