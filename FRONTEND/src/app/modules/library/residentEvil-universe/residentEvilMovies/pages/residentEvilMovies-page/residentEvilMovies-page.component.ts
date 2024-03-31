
import { residentEvilMovie } from '../../interfaces/residentEvilMovies.interface';
import { residentEvilMoviesService } from '../../services/residentEvilMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../residentEvilSoundtrack/soundtrack.service';

@Component({
  selector: 'app-residentEvilMovies-page',
  templateUrl: './residentEvilMovies-page.component.html',
  styleUrls: ['./residentEvilMovies-page.component.scss']
})
export class residentEvilMoviesPageComponent implements OnInit {
  residentEvilMovies: residentEvilMovie[] = []
  constructor(private residentEvilMoviesService: residentEvilMoviesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.residentEvilMoviesService.getresidentEvilMovies().subscribe({
      next: (residentEvilMovies: residentEvilMovie[]) => {
        this.residentEvilMovies = residentEvilMovies
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

