import { Component } from '@angular/core';
import { AudioService } from '../crepusculo-universe/crepusculoSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-crepusculo-universe',
  templateUrl: './crepusculo-universe.component.html',
  styleUrls: ['./crepusculo-universe.component.scss']
})
export class CrepusculoUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
