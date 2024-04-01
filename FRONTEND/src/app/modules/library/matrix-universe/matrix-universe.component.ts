import { Component } from '@angular/core';
import { AudioService } from './matrixSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-matrix-universe',
  templateUrl: './matrix-universe.component.html',
  styleUrls: ['./matrix-universe.component.scss']
})
export class MatrixUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
