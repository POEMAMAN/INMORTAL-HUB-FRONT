import { AudioService } from '../../../alienSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alienMarkets-page',
  templateUrl: './alienMarkets-page.component.html',
  styleUrls: ['./alienMarkets-page.component.scss']
})
export class alienMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

