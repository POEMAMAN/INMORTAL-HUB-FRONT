
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../terminatorSoundtrack/soundtrack.service';

@Component({
  selector: 'app-terminatorMarkets-page',
  templateUrl: './terminatorMarkets-page.component.html',
  styleUrls: ['./terminatorMarkets-page.component.scss']
})
export class terminatorMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

