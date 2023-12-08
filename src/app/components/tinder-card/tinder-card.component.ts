import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { Subject } from 'rxjs';
import { User } from './user';
import { MatDialog } from '@angular/material/dialog';
import { Assumption } from 'src/app/models/assumption.model';

@Component({
  selector: 'app-tinder-card',
  templateUrl: './tinder-card.component.html',
  styleUrls: ['./tinder-card.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]

})
export class TinderCardComponent {

  @Input() cardData!: Assumption;
  @Output() next = new EventEmitter<void>();

  constructor() { }

  swipeLeft() {
    // Handle left swipe logic
    this.showResponse(false);
    this.next.emit();

  }

  swipeRight() {
    // Handle right swipe logic
    this.showResponse(true);
    this.next.emit();

  }

  showResponse(userChoice: boolean) {
    // Compare userChoice with cardData.isReal and show response accordingly
    // You can use MatDialog here to show the response
  }
}