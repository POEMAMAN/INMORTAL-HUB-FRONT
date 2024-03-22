
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../starWarsSoundtrack/soundtrack.service';

@Component({
  selector: 'app-starWarsMarkets-page',
  templateUrl: './starWarsMarkets-page.component.html',
  styleUrls: ['./starWarsMarkets-page.component.scss']
})
export class starWarsMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
