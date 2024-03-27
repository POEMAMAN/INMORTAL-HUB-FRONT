
import { transformersMovie } from '../../interfaces/transformersMovies.interface';
import { transformersMoviesService } from '../../services/transformersMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../transformersSoundtrack/soundtrack.service';

@Component({
  selector: 'app-transformersMovies-page',
  templateUrl: './transformersMovies-page.component.html',
  styleUrls: ['./transformersMovies-page.component.scss']
})
export class transformersMoviesPageComponent implements OnInit {
  transformersMovies: transformersMovie[] = []
  constructor(private transformersMoviesService: transformersMoviesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.transformersMoviesService.gettransformersMovies().subscribe({
      next: (transformersMovies: transformersMovie[]) => {
        this.transformersMovies = transformersMovies
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

