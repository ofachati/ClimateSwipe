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
  @Output() backendClick: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }

  onBackendClick(): void {
    this.backendClick.emit();
  }

  DeveloperMode() {
    this.clickCount++;
    if (this.clickCount === 7) {
      this.showDeveloperModeSnackBar();
      this.clickCount = 0; // Reset the count after opening the dialog
    }
  }

  showDeveloperModeSnackBar() {
    let snackBarRef = this.snackBar.open('Developer mode activated!', 'OK', {
      duration: 10000, // Adjust the duration as needed
      verticalPosition: 'bottom', // Position the snackbar at the top
      panelClass: ['green-snackbar'] // Apply the custom CSS class

    });

    // Subscribe to the 'OK' button click event
    snackBarRef.onAction().subscribe(() => {
      this.openDeveloperModeDialog();
    });
  }

  openDeveloperModeDialog() {
    this.dialog.open(DeveloperModeComponent, {
      width: '50%',
      height: '50%',
    });
  }

}
