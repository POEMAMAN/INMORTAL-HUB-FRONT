import { AudioService } from './../../../../dune-universe/duneSoundtrack/soundtrack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lordOfTheRingsMarkets-page',
  templateUrl: './lordOfTheRingsMarkets-page.component.html',
  styleUrls: ['./lordOfTheRingsMarkets-page.component.scss']
})
export class lordOfTheRingsMarketsPageComponent{
  constructor(private audioService: AudioService) {}
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
}
