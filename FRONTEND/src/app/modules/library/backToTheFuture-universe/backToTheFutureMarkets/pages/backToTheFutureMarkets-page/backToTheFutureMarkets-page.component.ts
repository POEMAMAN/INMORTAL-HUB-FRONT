import { AudioService } from '../../../backToTheFutureSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backToTheFutureMarkets-page',
  templateUrl: './backToTheFutureMarkets-page.component.html',
  styleUrls: ['./backToTheFutureMarkets-page.component.scss']
})
export class backToTheFutureMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

