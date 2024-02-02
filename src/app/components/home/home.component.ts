
import { Component } from '@angular/core';
import { Assumption } from 'src/app/models/assumption.model';
import assumptions from 'src/assets/datasets/assumptions.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  currentAssumption!: Assumption;
  private currentIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.currentAssumption = assumptions[this.currentIndex];
  }

  goToNextAssumption() {
    this.currentIndex = (this.currentIndex + 1) % assumptions.length;
    this.currentAssumption = assumptions[this.currentIndex];
  }

}
