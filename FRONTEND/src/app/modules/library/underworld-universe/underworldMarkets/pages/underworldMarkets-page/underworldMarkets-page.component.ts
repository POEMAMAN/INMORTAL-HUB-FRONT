import { AudioService } from './../../../../dune-universe/duneSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-underworldMarkets-page',
  templateUrl: './underworldMarkets-page.component.html',
  styleUrls: ['./underworldMarkets-page.component.scss']
})
export class underworldMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
}
