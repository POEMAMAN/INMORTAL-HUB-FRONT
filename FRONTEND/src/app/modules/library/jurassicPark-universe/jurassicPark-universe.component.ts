import { AudioService } from './../jurassicPark-universe/jurassicParkSoundtrack/soundtrack.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jurassicPark-universe',
  templateUrl: './jurassicPark-universe.component.html',
  styleUrls: ['./jurassicPark-universe.component.scss']
})
export class JurassicParkUniverseComponent {
  constructor(private audioService: AudioService) {}

  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
