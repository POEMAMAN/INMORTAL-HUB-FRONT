import { Component } from '@angular/core';
import { AudioService } from '../alien-universe/alienSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-alien-universe',
  templateUrl: './alien-universe.component.html',
  styleUrls: ['./alien-universe.component.scss']
})
export class AlienUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
