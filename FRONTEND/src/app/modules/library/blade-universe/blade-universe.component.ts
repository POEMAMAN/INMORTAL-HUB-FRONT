import { Component } from '@angular/core';
import { AudioService } from '../blade-universe/bladeSoundtrack/soundtrack.service';//


@Component({
  selector: 'app-blade-universe',
  templateUrl: './blade-universe.component.html',
  styleUrls: ['./blade-universe.component.scss']
})
export class BladeUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
