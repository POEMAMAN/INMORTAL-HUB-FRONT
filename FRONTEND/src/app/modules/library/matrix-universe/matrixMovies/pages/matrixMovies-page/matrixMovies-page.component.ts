
import { MatrixMovie } from '../../interfaces/MatrixMovies.interface';
import { matrixMoviesService } from '../../services/matrixMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../matrixSoundtrack/soundtrack.service';

@Component({
  selector: 'app-matrixMovies-page',
  templateUrl: './matrixMovies-page.component.html',
  styleUrls: ['./matrixMovies-page.component.scss']
})
export class matrixMoviesPageComponent implements OnInit {
  matrixMovies: MatrixMovie[] = []
  constructor(private matrixMoviesService: matrixMoviesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.matrixMoviesService.getMatrixMovies().subscribe({
      next: (matrixMovies: MatrixMovie[]) => {
        this.matrixMovies = matrixMovies
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
