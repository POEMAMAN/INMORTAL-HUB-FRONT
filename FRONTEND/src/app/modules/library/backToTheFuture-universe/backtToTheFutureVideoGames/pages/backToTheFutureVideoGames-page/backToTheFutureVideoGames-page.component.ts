import { backToTheFutureVideoGames } from '../../interfaces/backToTheFutureVideoGames.interface';
import { backToTheFutureVideoGamesService } from '../../services/backToTheFutureVideoGames.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../backToTheFutureSoundtrack/soundtrack.service';

@Component({
  selector: 'app-backToTheFutureVideoGames-page',
  templateUrl: './backToTheFutureVideoGames-page.component.html',
  styleUrls: ['./backToTheFutureVideoGames-page.component.scss']
})
export class backToTheFutureVideoGamesPageComponent implements OnInit {
  backToTheFutureVideoGames: backToTheFutureVideoGames[] = []
  constructor(private backToTheFutureVideoGamesService: backToTheFutureVideoGamesService, private audioService: AudioService  ) {}


  ngOnInit(){
    this.backToTheFutureVideoGamesService.getbackToTheFutureVideoGames().subscribe({
      next: (backToTheFutureVideoGames: backToTheFutureVideoGames[]) => {
        this.backToTheFutureVideoGames = backToTheFutureVideoGames
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

