import { AudioService } from './../../../../starTrek-universe/starTrekSoundtrack/soundtrack.service';

import { StarTrekMovie } from '../../interfaces/StarTrekMovies.interface';
import { starTrekMoviesService } from '../../services/starTrekMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starTrekMovies-page',
  templateUrl: './starTrekMovies-page.component.html',
  styleUrls: ['./starTrekMovies-page.component.scss']
})
export class starTrekMoviesPageComponent implements OnInit {
  starTrekMovies: StarTrekMovie[] = []
  constructor(private starTrekMoviesService: starTrekMoviesService, private audioService: AudioService ) {}


  ngOnInit(){
    this.starTrekMoviesService.getStarTrekMovies().subscribe({
      next: (starTrekMovies: StarTrekMovie[]) => {
        this.starTrekMovies = starTrekMovies
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
}
