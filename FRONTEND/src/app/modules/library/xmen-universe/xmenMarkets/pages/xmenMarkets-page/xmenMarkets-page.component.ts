import { AudioService } from '../../../xmenSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xmenMarkets-page',
  templateUrl: './xmenMarkets-page.component.html',
  styleUrls: ['./xmenMarkets-page.component.scss']
})
export class xmenMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

