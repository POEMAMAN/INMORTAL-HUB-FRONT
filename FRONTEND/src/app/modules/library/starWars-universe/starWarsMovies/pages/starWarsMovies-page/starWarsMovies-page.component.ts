
import { starWarsMovie } from '../../interfaces/starWarsMovies.interface';
import { starWarsMoviesService } from '../../services/starWarsMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../starWarsSoundtrack/soundtrack.service';

@Component({
  selector: 'app-starWarsMovies-page',
  templateUrl: './starWarsMovies-page.component.html',
  styleUrls: ['./starWarsMovies-page.component.scss']
})
export class starWarsMoviesPageComponent implements OnInit {
  starWarsMovies: starWarsMovie[] = []
  constructor(private starWarsMoviesService: starWarsMoviesService, private audioService: AudioService ) {}


  ngOnInit(){
    this.starWarsMoviesService.getstarWarsMovies().subscribe({
      next: (starWarsMovies: starWarsMovie[]) => {
        this.starWarsMovies = starWarsMovies
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
