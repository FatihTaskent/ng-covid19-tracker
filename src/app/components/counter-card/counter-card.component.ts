import { Component, OnInit, Input } from '@angular/core';
import { CounterCard } from './counter-card';

@Component({
  selector: 'counter-card',
  templateUrl: './counter-card.component.html'
})
export class CounterCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() counter: CounterCard

}
