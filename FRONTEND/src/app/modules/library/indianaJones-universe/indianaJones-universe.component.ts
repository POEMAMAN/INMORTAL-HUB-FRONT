import { AudioService } from './../indianaJones-universe/indianaJonesSoundtrack/soundtrack.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-indianaJones-universe',
  templateUrl: './indianaJones-universe.component.html',
  styleUrls: ['./indianaJones-universe.component.scss']
})
export class IndianaJonesUniverseComponent {
  constructor(private audioService: AudioService) {}

  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
