import { Component } from '@angular/core';
import { AudioService } from '../xmen-universe/xmenSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-xmen-universe',
  templateUrl: './xmen-universe.component.html',
  styleUrls: ['./xmen-universe.component.scss']
})
export class xmenUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
