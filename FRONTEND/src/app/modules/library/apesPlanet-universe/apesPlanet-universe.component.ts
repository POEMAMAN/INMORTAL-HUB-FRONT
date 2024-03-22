import { Component } from '@angular/core';
import { AudioService } from '../apesPlanet-universe/apesPlanetSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-apesPlanet-universe',
  templateUrl: './apesPlanet-universe.component.html',
  styleUrls: ['./apesPlanet-universe.component.scss']
})
export class ApesPlanetUniverseComponent {
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
