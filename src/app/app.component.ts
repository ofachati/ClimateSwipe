import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
    ]),
  ],
})

export class AppComponent{
  showSinger: boolean = false;

  displayEasterEgg = false;
  clickCount = 0;




  onPress() {
    this.clickCount = ++this.clickCount;
    if (this.clickCount == 6) {
      this.displayEasterEgg = true;
      this.clickCount = 0;
    }
  }

  
  triggerEasterEgg() {
    const audioElement = document.getElementById('rickRollAudio') as HTMLAudioElement;

    // Play the music only if it's not already playing
    if (audioElement.paused) {
      audioElement.play();

      // Show the sliding animation
      this.showSinger = true;

      // Stop the audio after 10 seconds (adjust the duration as needed)
      setTimeout(() => {
        audioElement.pause();
        audioElement.currentTime = 0;
        this.showSinger = false;
      }, 9000); //9 seconds in milliseconds
    }
  }


}


