
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../apesPlanetSoundtrack/soundtrack.service';

@Component({
  selector: 'app-apesPlanetMarkets-page',
  templateUrl: './apesPlanetMarkets-page.component.html',
  styleUrls: ['./apesPlanetMarkets-page.component.scss']
})
export class apesPlanetMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

