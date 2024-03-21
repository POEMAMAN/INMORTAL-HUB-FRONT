import { AudioService } from './../../../../dune-universe/duneSoundtrack/soundtrack.service';

import { DuneMovie } from '../../interfaces/DuneMovies.interface';
import { duneMoviesService } from '../../services/duneMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duneMovies-page',
  templateUrl: './duneMovies-page.component.html',
  styleUrls: ['./duneMovies-page.component.scss']
})
export class duneMoviesPageComponent implements OnInit {
  duneMovies: DuneMovie[] = []
  constructor(private duneMoviesService: duneMoviesService, private audioService: AudioService ) {}


  ngOnInit(){
    this.duneMoviesService.getDuneMovies().subscribe({
      next: (duneMovies: DuneMovie[]) => {
        this.duneMovies = duneMovies
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
