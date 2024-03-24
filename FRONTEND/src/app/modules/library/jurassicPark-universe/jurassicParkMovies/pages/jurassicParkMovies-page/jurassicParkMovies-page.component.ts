import { AudioService } from './../../../../jurassicPark-universe/jurassicParkSoundtrack/soundtrack.service';

import { JurassicParkMovie } from '../../interfaces/JurassicParkMovies.interface';
import { jurassicParkMoviesService } from '../../services/jurassicParkMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurassicParkMovies-page',
  templateUrl: './jurassicParkMovies-page.component.html',
  styleUrls: ['./jurassicParkMovies-page.component.scss']
})
export class jurassicParkMoviesPageComponent implements OnInit {
  jurassicParkMovies: JurassicParkMovie[] = []
  constructor(private jurassicParkMoviesService: jurassicParkMoviesService, private audioService: AudioService ) {}


  ngOnInit(){
    this.jurassicParkMoviesService.getJurassicParkMovies().subscribe({
      next: (jurassicParkMovies: JurassicParkMovie[]) => {
        this.jurassicParkMovies = jurassicParkMovies
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
