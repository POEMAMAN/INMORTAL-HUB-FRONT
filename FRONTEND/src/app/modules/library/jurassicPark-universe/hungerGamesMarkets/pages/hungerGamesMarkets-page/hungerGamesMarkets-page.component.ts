import { AudioService } from '../../../hungerGamesSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hungerGamesMarkets-page',
  templateUrl: './hungerGamesMarkets-page.component.html',
  styleUrls: ['./hungerGamesMarkets-page.component.scss']
})
export class hungerGamesMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

