
import { Component } from '@angular/core';
import { Subject} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  parentSubject:Subject<string> = new Subject();
  constructor() {

  }

 cardAnimation(value: string) {
    this.parentSubject.next(value);
  }

}
