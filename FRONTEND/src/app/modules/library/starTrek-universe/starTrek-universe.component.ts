import { AudioService } from './../starTrek-universe/starTrekSoundtrack/soundtrack.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starTrek-universe',
  templateUrl: './starTrek-universe.component.html',
  styleUrls: ['./starTrek-universe.component.scss']
})
export class StarTrekUniverseComponent {
  constructor(private audioService: AudioService) {}

  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
