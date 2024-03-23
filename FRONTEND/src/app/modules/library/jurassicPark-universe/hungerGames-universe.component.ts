import { Component } from '@angular/core';
import { AudioService } from '../hungerGames-universe/hungerGamesSoundtrack/soundtrack.service';//

@Component({
  selector: 'app-hungerGames-universe',
  templateUrl: './hungerGames-universe.component.html',
  styleUrls: ['./hungerGames-universe.component.scss']
})
export class HungerGamesUniverseComponent {
  constructor(private audioService: AudioService) {}


  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }

};

