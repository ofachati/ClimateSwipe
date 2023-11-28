import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-mode',
  templateUrl: './developer-mode.component.html',
  styleUrls: ['./developer-mode.component.scss']
})
export class DeveloperModeComponent {
  downloadCv(name: string) {
    // Implement the logic to download the CV based on the selected developer's name
    console.log(`Downloading CV for ${name}`);
  }
}
