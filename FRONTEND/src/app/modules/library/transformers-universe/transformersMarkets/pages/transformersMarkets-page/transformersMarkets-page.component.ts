import { AudioService } from '../../../transformersSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformersMarkets-page',
  templateUrl: './transformersMarkets-page.component.html',
  styleUrls: ['./transformersMarkets-page.component.scss']
})
export class transformersMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

