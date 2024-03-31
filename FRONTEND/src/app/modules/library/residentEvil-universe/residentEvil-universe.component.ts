import { Component } from '@angular/core';
import { AudioService } from '../residentEvil-universe/residentEvilSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-residentEvil-universe',
  templateUrl: './residentEvil-universe.component.html',
  styleUrls: ['./residentEvil-universe.component.scss']
})
export class residentEvilUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
