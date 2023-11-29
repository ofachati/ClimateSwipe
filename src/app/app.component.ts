import { Component, OnInit ,HostListener} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

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

  
  triggerRickRoll() {
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

  easterEggs: { code: string[]; action: () => void }[] = [
    {
      code: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
      action: () => this.triggerRickRoll(),
    },
    // Add more Easter eggs as needed
  ];

  enteredKeys: string[] = [];

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Check each defined Easter egg
    this.easterEggs.forEach((egg) => this.checkEasterEgg(egg, event.key));
  }

  // Check an individual Easter egg
  checkEasterEgg(easterEgg: { code: string[]; action: () => void }, key: string) {
    const { code, action } = easterEgg;

    // Keep track of the entered keys
    this.enteredKeys.push(key);

    // Check if the entered keys match the Easter egg code
    if (this.arrayEquals(this.enteredKeys.slice(-code.length), code)) {
      // Execute the Easter egg action
      action();

      // Reset the entered keys
      this.enteredKeys = [];
    }
  }

  // Helper function to compare arrays
  arrayEquals(arr1: string[], arr2: string[]) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }

 

}


