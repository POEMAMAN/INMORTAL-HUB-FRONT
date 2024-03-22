import { Component } from '@angular/core';
import { AudioService } from './starWarsSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-starWars-universe',
  templateUrl: './starWars-universe.component.html',
  styleUrls: ['./starWars-universe.component.scss']
})
export class starWarsUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
