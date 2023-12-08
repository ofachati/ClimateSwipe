import { Component, HostListener, ViewChild } from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss']
})
export class TetrisComponent {
  @ViewChild('game')
  private _tetris!: TetrisCoreComponent;

  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;

  public gameAreaFocused = false;

  // constructor(private _hotkeysService: HotkeysService) {
  //     this._addHotkeys();
  // }

  public onLineCleared() {
      console.log('line cleared');
  }

  public onGameOver() {
      alert('game over');
  }

  public onRotateButtonPressed() {
      this._tetris.actionRotate();
  }

  // private _addHotkeys() {
  //     this._hotkeysService.add(new Hotkey('up', (event: KeyboardEvent): boolean => {
  //         this._tetris.actionRotate();
  //         return false; // Prevent bubbling
  //     }));
  //
  //     this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
  //         this._tetris.actionLeft();
  //         return false; // Prevent bubbling
  //     }));
  //
  //     this._hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
  //         this._tetris.actionDown();
  //         return false; // Prevent bubbling
  //     }));
  //
  //     this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
  //         this._tetris.actionRight();
  //         return false; // Prevent bubbling
  //     }));
  // }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this._tetris.actionRotate();
        break;
      case 'ArrowLeft':
        this._tetris.actionLeft();
        break;
      case 'ArrowDown':
        this._tetris.actionDown();
        break;
      case 'ArrowRight':
        this._tetris.actionRight();
        break;
      // Add more cases for other keys if needed
    }
}}
