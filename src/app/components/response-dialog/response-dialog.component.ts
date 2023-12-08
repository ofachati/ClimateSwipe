import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-response-dialog',
  templateUrl: './response-dialog.component.html',
  // styleUrls: ['./response-dialog.component.css'] // if needed
})
export class ResponseDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
