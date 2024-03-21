import { Component } from '@angular/core';
import { AudioService } from './missionImposibleSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-missionImposible-universe',
  templateUrl: './missionImposible-universe.component.html',
  styleUrls: ['./missionImposible-universe.component.scss']
})
export class MissionImposibleUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
