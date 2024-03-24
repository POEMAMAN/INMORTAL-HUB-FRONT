import { AudioService } from './../../../../starTrek-universe/starTrekSoundtrack/soundtrack.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starTrekMarkets-page',
  templateUrl: './starTrekMarkets-page.component.html',
  styleUrls: ['./starTrekMarkets-page.component.scss']
})
export class starTrekMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
}
