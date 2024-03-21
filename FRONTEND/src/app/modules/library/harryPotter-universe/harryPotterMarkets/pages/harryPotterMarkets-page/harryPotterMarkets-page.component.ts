import { AudioService } from '../../../harryPotterSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harryPotterMarkets-page',
  templateUrl: './harryPotterMarkets-page.component.html',
  styleUrls: ['./harryPotterMarkets-page.component.scss']
})
export class harryPotterMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

