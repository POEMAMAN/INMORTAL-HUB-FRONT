
import { backToTheFutureMovie } from '../../interfaces/BackToTheFutureMovies.interface';
import { backToTheFutureMoviesService } from '../../services/backToTheFutureMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../backToTheFutureSoundtrack/soundtrack.service';

@Component({
  selector: 'app-backToTheFutureMovies-page',
  templateUrl: './backToTheFutureMovies-page.component.html',
  styleUrls: ['./backToTheFutureMovies-page.component.scss']
})
export class backToTheFutureMoviesPageComponent implements OnInit {
  backToTheFutureMovies: backToTheFutureMovie[] = []
  constructor(private backToTheFutureMoviesService: backToTheFutureMoviesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.backToTheFutureMoviesService.getbackToTheFutureMovies().subscribe({
      next: (backToTheFutureMovies: backToTheFutureMovie[]) => {
        this.backToTheFutureMovies = backToTheFutureMovies
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

