
import { CrepusculoMovie } from '../../interfaces/crepusculoMovies.interface';
import { crepusculoMoviesService } from '../../services/crepusculoMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../crepusculoSoundtrack/soundtrack.service';

@Component({
  selector: 'app-crepusculoMovies-page',
  templateUrl: './crepusculoMovies-page.component.html',
  styleUrls: ['./crepusculoMovies-page.component.scss']
})
export class crepusculoMoviesPageComponent implements OnInit {
  crepusculoMovies: CrepusculoMovie[] = []
  constructor(private crepusculoMoviesService: crepusculoMoviesService,private audioService: AudioService  ) {}


  ngOnInit(){
    this.crepusculoMoviesService.getCrepusculoMovies().subscribe({
      next: (crepusculoMovies: CrepusculoMovie[]) => {
        this.crepusculoMovies = crepusculoMovies
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
