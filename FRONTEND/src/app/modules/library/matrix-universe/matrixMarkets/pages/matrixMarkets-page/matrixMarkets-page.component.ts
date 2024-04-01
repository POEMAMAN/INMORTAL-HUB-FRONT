import { AudioService } from '../../../matrixSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrixMarkets-page',
  templateUrl: './matrixMarkets-page.component.html',
  styleUrls: ['./matrixMarkets-page.component.scss']
})
export class matrixMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
