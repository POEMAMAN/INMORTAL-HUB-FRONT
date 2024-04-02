import { underworldMoviesService } from './../../services/underworldMovies.service';
import { AudioService } from './../../../../underworld-universe/underworldSoundtrack/soundtrack.service';
import { underworldMovie } from '../../interfaces/underworldMovies.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-underworldMovies-page',
  templateUrl: './underworldMovies-page.component.html',
  styleUrls: ['./underworldMovies-page.component.scss']
})
export class underworldMoviesPageComponent implements OnInit {
  underworldMovies: underworldMovie[] = []
  constructor(private underworldMoviesService: underworldMoviesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.underworldMoviesService.getunderworldMovies().subscribe({
      next: (underworldMovies: underworldMovie[]) => {
        this.underworldMovies = underworldMovies
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