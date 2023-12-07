import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import data from './users.json';
import { Subject } from 'rxjs';
import { User } from './user';

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

  public users: User[] = data;
  public index = 0;
  @Input()
  parentSubject!: Subject<any>;



  animationState!: string;
  constructor() { }

  ngOnInit() {
  
    this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });
  }

  startAnimation(state: string) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
    this.index++;
  }


  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

}
