import { AudioService } from './../dune-universe/duneSoundtrack/soundtrack.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dune-universe',
  templateUrl: './dune-universe.component.html',
  styleUrls: ['./dune-universe.component.scss']
})
export class DuneUniverseComponent {
  constructor(private audioService: AudioService) {}

  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
