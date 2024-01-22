import { Component, OnInit ,HostListener, ChangeDetectorRef} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeveloperModeComponent } from './components/developer-mode/developer-mode.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {
  showSinger: boolean = false;
  showMission: boolean = false;

  barrelRoll = false;
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private dataService: DataService) {}

  actions = [this.triggerMissionPassed, this.triggerRickRoll, this.onPress, this.triggerDeveloperMode];

  ngOnInit() {
    this.dataService.fetchEmissionsData().subscribe(data => {
      console.log('Fetched Emissions Data:', data);
      // Use the data as needed
    });
  }


  onPress() {
      console.log("pressed");
      this.barrelRoll = !this.barrelRoll;
      setTimeout(() => {
        this.barrelRoll = !this.barrelRoll;
      }, 3000); 
  }

  triggerMissionPassed() {
    const audioElement = document.getElementById('missionPassedAudio') as HTMLAudioElement;

    // Play the music only if it's not already playing
    if (audioElement.paused) {
      audioElement.play();
      // Show the sliding animation
      this.showMission = true;
      // Stop the audio after 10 seconds (adjust the duration as needed)
      setTimeout(() => {
        audioElement.pause();
        audioElement.currentTime = 0;
        this.showMission = false;
      }, 7000); //9 seconds in milliseconds
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
      action: () =>  this.executeRandomAction(),
    }
  
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
  currentActionIndex = 0; // New property to keep track of the current action index

  executeRandomAction(){ // Call the current action
  this.actions[this.currentActionIndex].call(this);

  // Increment the index to point to the next action
  this.currentActionIndex++;

  // If the last action has been executed, reset the index
  if (this.currentActionIndex >= this.actions.length) {
    this.currentActionIndex = 0;
  }
}

  triggerDeveloperMode() {
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


