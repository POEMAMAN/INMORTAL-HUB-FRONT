import { Component } from '@angular/core';
import { AudioService } from './../lordOfTheRings-universe/lordOfTheRingsSoundtrack/soundtrack.service';

@Component({
  selector: 'app-lordOfTheRings-universe',
  templateUrl: './lordOfTheRings-universe.component.html',
  styleUrls: ['./lordOfTheRings-universe.component.scss']
})
export class lordOfTheRingsUniverseComponent {
  constructor(private audioService: AudioService) {}

  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
