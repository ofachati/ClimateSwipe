import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state,keyframes, animate, transition, style } from "@angular/animations";
import * as kf from './keyframes';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Assumption } from 'src/app/models/assumption.model';
import { ResponseDialogComponent } from '../response-dialog/response-dialog.component';

@Component({
  selector: 'app-tinder-card',
  templateUrl: './tinder-card.component.html',
  styleUrls: ['./tinder-card.component.scss'],
  animations: [
    trigger('swipeAnimation', [
      state('left', style({
        transform: 'translateX(-100%)'
      })),
      state('right', style({
        transform: 'translateX(100%)'
      })),
      transition('* => *', animate('400ms ease'))
    ])
  ]

})
export class TinderCardComponent {

  @Input() cardData!: Assumption;
  @Output() next = new EventEmitter<void>();
  swipeState!: 'left' | 'right' | '';

  constructor(public dialog: MatDialog) { }


  openDialog(isCorrect: boolean) {
    this.dialog.open(ResponseDialogComponent, {
      width: '500px', // Set your desired width here
      data: {
        isCorrect: isCorrect,
        response: this.cardData.response
      }
    });
  }
  

  swipeLeft() {
    this.openDialog(this.cardData.isReal === false);
    this.next.emit();

  }

  swipeRight() {
    this.openDialog(this.cardData.isReal === true);
    this.next.emit();

  }

  showResponse(userChoice: boolean) {
    // Compare userChoice with cardData.isReal and show response accordingly
    // You can use MatDialog here to show the response
  }
}