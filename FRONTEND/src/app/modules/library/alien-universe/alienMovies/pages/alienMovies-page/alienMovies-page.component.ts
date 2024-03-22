
import { AlienMovie } from '../../interfaces/AlienMovies.interface';
import { alienMoviesService } from '../../services/alienMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../alienSoundtrack/soundtrack.service';

@Component({
  selector: 'app-alienMovies-page',
  templateUrl: './alienMovies-page.component.html',
  styleUrls: ['./alienMovies-page.component.scss']
})
export class alienMoviesPageComponent implements OnInit {
  alienMovies: AlienMovie[] = []
  constructor(private alienMoviesService: alienMoviesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.alienMoviesService.getAlienMovies().subscribe({
      next: (alienMovies: AlienMovie[]) => {
        this.alienMovies = alienMovies
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

