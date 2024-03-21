
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../crepusculoSoundtrack/soundtrack.service';

@Component({
  selector: 'app-crepusculoMarkets-page',
  templateUrl: './crepusculoMarkets-page.component.html',
  styleUrls: ['./crepusculoMarkets-page.component.scss']
})
export class crepusculoMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

