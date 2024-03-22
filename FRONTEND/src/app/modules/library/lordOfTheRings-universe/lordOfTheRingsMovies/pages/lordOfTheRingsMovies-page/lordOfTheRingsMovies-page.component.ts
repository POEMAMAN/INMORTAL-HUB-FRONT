import { AudioService } from './../../../../dune-universe/duneSoundtrack/soundtrack.service';
import { lordOfTheRingsMovie } from '../../interfaces/lordOfTheRingsMovies.interface';
import { lordOfTheRingsMoviesService } from '../../services/lordOfTheRingsMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lordOfTheRingsMovies-page',
  templateUrl: './lordOfTheRingsMovies-page.component.html',
  styleUrls: ['./lordOfTheRingsMovies-page.component.scss']
})
export class lordOfTheRingsMoviesPageComponent implements OnInit {
  lordOfTheRingsMovies: lordOfTheRingsMovie[] = []
  constructor(private lordOfTheRingsMoviesService: lordOfTheRingsMoviesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.lordOfTheRingsMoviesService.getlordOfTheRingsMovies().subscribe({
      next: (lordOfTheRingsMovies: lordOfTheRingsMovie[]) => {
        this.lordOfTheRingsMovies = lordOfTheRingsMovies
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