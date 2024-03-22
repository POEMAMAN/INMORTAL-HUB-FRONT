
import { BladeMovie } from '../../interfaces/BladeMovies.interface';
import { bladeMoviesService } from '../../services/bladeMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../bladeSoundtrack/soundtrack.service';

@Component({
  selector: 'app-bladeMovies-page',
  templateUrl: './bladeMovies-page.component.html',
  styleUrls: ['./bladeMovies-page.component.scss']
})
export class bladeMoviesPageComponent implements OnInit {
  bladeMovies: BladeMovie[] = []
  constructor(private bladeMoviesService: bladeMoviesService,private audioService: AudioService   ) {}


  ngOnInit(){
    this.bladeMoviesService.getBladeMovies().subscribe({
      next: (bladeMovies: BladeMovie[]) => {
        this.bladeMovies = bladeMovies
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
