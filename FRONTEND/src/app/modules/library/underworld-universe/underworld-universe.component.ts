import { Component } from '@angular/core';
import { AudioService } from './../underworld-universe/underworldSoundtrack/soundtrack.service';

@Component({
  selector: 'app-underworld-universe',
  templateUrl: './underworld-universe.component.html',
  styleUrls: ['./underworld-universe.component.scss']
})
export class underworldUniverseComponent {
  constructor(private audioService: AudioService) {}

  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
