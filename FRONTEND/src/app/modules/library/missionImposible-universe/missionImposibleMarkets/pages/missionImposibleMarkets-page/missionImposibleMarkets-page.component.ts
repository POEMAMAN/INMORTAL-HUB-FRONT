import { AudioService } from '../../../missionImposibleSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missionImposibleMarkets-page',
  templateUrl: './missionImposibleMarkets-page.component.html',
  styleUrls: ['./missionImposibleMarkets-page.component.scss']
})
export class missionImposibleMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
