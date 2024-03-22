import { AudioService } from '../../../bladeSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bladeMarkets-page',
  templateUrl: './bladeMarkets-page.component.html',
  styleUrls: ['./bladeMarkets-page.component.scss']
})
export class bladeMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};


