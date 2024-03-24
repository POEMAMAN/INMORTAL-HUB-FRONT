import { AudioService } from './../../../../jurassicPark-universe/jurassicParkSoundtrack/soundtrack.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurassicParkMarkets-page',
  templateUrl: './jurassicParkMarkets-page.component.html',
  styleUrls: ['./jurassicParkMarkets-page.component.scss']
})
export class jurassicParkMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
}
