
import { xmenMovie } from '../../interfaces/xmenMovies.interface';
import { xmenMoviesService } from '../../services/xmenMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../xmenSoundtrack/soundtrack.service';

@Component({
  selector: 'app-xmenMovies-page',
  templateUrl: './xmenMovies-page.component.html',
  styleUrls: ['./xmenMovies-page.component.scss']
})
export class xmenMoviesPageComponent implements OnInit {
  xmenMovies: xmenMovie[] = []
  constructor(private xmenMoviesService: xmenMoviesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.xmenMoviesService.getxmenMovies().subscribe({
      next: (xmenMovies: xmenMovie[]) => {
        this.xmenMovies = xmenMovies
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

