import { AudioService } from './../../../../dune-universe/duneSoundtrack/soundtrack.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duneMarkets-page',
  templateUrl: './duneMarkets-page.component.html',
  styleUrls: ['./duneMarkets-page.component.scss']
})
export class duneMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
}
