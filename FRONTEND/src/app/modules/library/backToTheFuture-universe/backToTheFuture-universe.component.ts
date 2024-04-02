import { Component } from '@angular/core';
import { AudioService } from '../backToTheFuture-universe/backToTheFutureSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-backToTheFuture-universe',
  templateUrl: './backToTheFuture-universe.component.html',
  styleUrls: ['./backToTheFuture-universe.component.scss']
})
export class backToTheFutureUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
