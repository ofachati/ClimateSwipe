import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }


}
