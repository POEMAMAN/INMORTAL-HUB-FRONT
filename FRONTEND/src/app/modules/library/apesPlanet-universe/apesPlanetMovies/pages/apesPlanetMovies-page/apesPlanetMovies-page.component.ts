
import { ApesPlanetMovie } from '../../interfaces/ApesPlanetMovies.interface';
import { apesPlanetMoviesService } from '../../services/apesPlanetMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../apesPlanetSoundtrack/soundtrack.service';

@Component({
  selector: 'app-apesPlanetMovies-page',
  templateUrl: './apesPlanetMovies-page.component.html',
  styleUrls: ['./apesPlanetMovies-page.component.scss']
})
export class apesPlanetMoviesPageComponent implements OnInit {
  apesPlanetMovies: ApesPlanetMovie[] = []
  constructor(private apesPlanetMoviesService: apesPlanetMoviesService ,private audioService: AudioService ) {}


  ngOnInit(){
    this.apesPlanetMoviesService.getApesPlanetMovies().subscribe({
      next: (apesPlanetMovies: ApesPlanetMovie[]) => {
        this.apesPlanetMovies = apesPlanetMovies
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

