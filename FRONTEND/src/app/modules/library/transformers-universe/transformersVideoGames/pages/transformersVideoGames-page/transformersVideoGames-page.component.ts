import { transformersVideoGames } from '../../interfaces/transformersVideoGames.interface';
import { transformersVideoGamesService } from '../../services/transformersVideoGames.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../transformersSoundtrack/soundtrack.service';

@Component({
  selector: 'app-transformersVideoGames-page',
  templateUrl: './transformersVideoGames-page.component.html',
  styleUrls: ['./transformersVideoGames-page.component.scss']
})
export class transformersVideoGamesPageComponent implements OnInit {
  transformersVideoGames: transformersVideoGames[] = []
  constructor(private transformersVideoGamesService: transformersVideoGamesService, private audioService: AudioService  ) {}


  ngOnInit(){
    this.transformersVideoGamesService.gettransformersVideoGames().subscribe({
      next: (transformersVideoGames: transformersVideoGames[]) => {
        this.transformersVideoGames = transformersVideoGames
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

