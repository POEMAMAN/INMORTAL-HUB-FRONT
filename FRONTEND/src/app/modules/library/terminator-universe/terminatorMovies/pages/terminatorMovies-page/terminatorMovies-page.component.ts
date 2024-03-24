
import { TerminatorMovie } from '../../interfaces/TerminatorMovies.interface';
import { terminatorMoviesService } from '../../services/terminatorMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../terminatorSoundtrack/soundtrack.service';

@Component({
  selector: 'app-terminatorMovies-page',
  templateUrl: './terminatorMovies-page.component.html',
  styleUrls: ['./terminatorMovies-page.component.scss']
})
export class terminatorMoviesPageComponent implements OnInit {
  terminatorMovies: TerminatorMovie[] = []
  constructor(private terminatorMoviesService: terminatorMoviesService ,private audioService: AudioService ) {}


  ngOnInit(){
    this.terminatorMoviesService.getTerminatorMovies().subscribe({
      next: (terminatorMovies: TerminatorMovie[]) => {
        this.terminatorMovies = terminatorMovies
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

