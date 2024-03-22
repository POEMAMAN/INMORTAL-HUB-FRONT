import { AudioService } from './../../../../crepusculo-universe -/crepusculoSoundtrack/soundtrack.service';

import { Component, OnInit } from '@angular/core';

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
}
