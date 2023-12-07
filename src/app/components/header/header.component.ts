import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  changeTheme(theme: string): void {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }
}

//    background-color: #333;
//color: white;