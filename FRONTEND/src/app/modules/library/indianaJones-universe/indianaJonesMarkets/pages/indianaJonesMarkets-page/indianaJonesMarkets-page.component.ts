import { AudioService } from './../../../../indianaJones-universe/indianaJonesSoundtrack/soundtrack.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indianaJonesMarkets-page',
  templateUrl: './indianaJonesMarkets-page.component.html',
  styleUrls: ['./indianaJonesMarkets-page.component.scss']
})
export class indianaJonesMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
}
