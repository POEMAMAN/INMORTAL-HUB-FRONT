import { AudioService } from '../../../residentEvilSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residentEvilMarkets-page',
  templateUrl: './residentEvilMarkets-page.component.html',
  styleUrls: ['./residentEvilMarkets-page.component.scss']
})
export class residentEvilMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

