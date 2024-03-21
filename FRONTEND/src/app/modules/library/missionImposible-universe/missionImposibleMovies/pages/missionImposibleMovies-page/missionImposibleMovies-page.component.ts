
import { MissionImposibleMovie } from '../../interfaces/MissionImposibleMovies.interface';
import { missionImposibleMoviesService } from '../../services/missionImposibleMovies.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../missionImposibleSoundtrack/soundtrack.service';

@Component({
  selector: 'app-missionImposibleMovies-page',
  templateUrl: './missionImposibleMovies-page.component.html',
  styleUrls: ['./missionImposibleMovies-page.component.scss']
})
export class missionImposibleMoviesPageComponent implements OnInit {
  missionImposibleMovies: MissionImposibleMovie[] = []
  constructor(private missionImposibleMoviesService: missionImposibleMoviesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.missionImposibleMoviesService.getMissionImposibleMovies().subscribe({
      next: (missionImposibleMovies: MissionImposibleMovie[]) => {
        this.missionImposibleMovies = missionImposibleMovies
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
