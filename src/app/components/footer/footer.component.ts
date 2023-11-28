import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeveloperModeComponent } from '../developer-mode/developer-mode.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  clickCount = 0;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }

  onImageClick() {
    this.clickCount++;

    if (this.clickCount === 7) {
      this.showDeveloperModeSnackBar();
      this.openDeveloperModeDialog();
      this.clickCount = 0; // Reset the count after opening the dialog
    }
  }

  showDeveloperModeSnackBar() {
    this.snackBar.open('Developer mode activated!', 'OK', {
      duration: 10000, // Adjust the duration as needed
      verticalPosition: 'top', // Position the snackbar at the top
    });
  }  

  openDeveloperModeDialog() {
    this.dialog.open(DeveloperModeComponent, {
      width: '50%',
      height: '50%',
      // Add any other dialog configuration options as needed
    });
  }

}
