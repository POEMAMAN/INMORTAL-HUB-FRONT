import { ApesPlanetVideoGames } from '../../interfaces/ApesPlanetVideoGames.interface';
import { apesPlanetVideoGamesService } from '../../services/apesPlanetVideoGames.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../apesPlanetSoundtrack/soundtrack.service';

@Component({
  selector: 'app-apesPlanetVideoGames-page',
  templateUrl: './apesPlanetVideoGames-page.component.html',
  styleUrls: ['./apesPlanetVideoGames-page.component.scss']
})
export class apesPlanetVideoGamesPageComponent implements OnInit {
  apesPlanetVideoGames: ApesPlanetVideoGames[] = []
  constructor(private apesPlanetVideoGamesService: apesPlanetVideoGamesService, private audioService: AudioService  ) {}


  ngOnInit(){
    this.apesPlanetVideoGamesService.getApesPlanetVideoGames().subscribe({
      next: (apesPlanetVideoGames: ApesPlanetVideoGames[]) => {
        this.apesPlanetVideoGames = apesPlanetVideoGames
      },
      error: () => {}
    })
  }
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};

