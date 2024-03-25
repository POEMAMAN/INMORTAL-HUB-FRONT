import { Component } from '@angular/core';
import { AudioService } from '../transformers-universe/transformersSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-transformers-universe',
  templateUrl: './transformers-universe.component.html',
  styleUrls: ['./transformers-universe.component.scss']
})
export class transformersUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};
