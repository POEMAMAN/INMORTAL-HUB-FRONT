import { Component } from '@angular/core';
import { AudioService } from '../harryPotter-universe/harryPotterSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-harryPotter-universe',
  templateUrl: './harryPotter-universe.component.html',
  styleUrls: ['./harryPotter-universe.component.scss']
})
export class HarryPotterUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
