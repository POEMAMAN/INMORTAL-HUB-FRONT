import { AudioService } from './../../../../indianaJones-universe/indianaJonesSoundtrack/soundtrack.service';

import { IndianaJonesMovie } from '../../interfaces/IndianaJonesMovies.interface';
import { indianaJonesMoviesService } from '../../services/indianaJonesMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indianaJonesMovies-page',
  templateUrl: './indianaJonesMovies-page.component.html',
  styleUrls: ['./indianaJonesMovies-page.component.scss']
})
export class indianaJonesMoviesPageComponent implements OnInit {
  indianaJonesMovies: IndianaJonesMovie[] = []
  constructor(private indianaJonesMoviesService: indianaJonesMoviesService, private audioService: AudioService ) {}


  ngOnInit(){
    this.indianaJonesMoviesService.getIndianaJonesMovies().subscribe({
      next: (indianaJonesMovies: IndianaJonesMovie[]) => {
        this.indianaJonesMovies = indianaJonesMovies
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
