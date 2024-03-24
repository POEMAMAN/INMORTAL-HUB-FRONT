import { Component } from '@angular/core';
import { AudioService } from '../terminator-universe/terminatorSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-terminator-universe',
  templateUrl: './terminator-universe.component.html',
  styleUrls: ['./terminator-universe.component.scss']
})
export class TerminatorUniverseComponent {
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
