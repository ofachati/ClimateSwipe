import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-mode',
  templateUrl: './developer-mode.component.html',
  styleUrls: ['./developer-mode.component.scss']
})
export class DeveloperModeComponent {
  openPDF(pdfFileName: string): void {
    const pdfPath = `assets/pdfs/${pdfFileName}`;
    window.open(pdfPath, '_blank');
  }
}
