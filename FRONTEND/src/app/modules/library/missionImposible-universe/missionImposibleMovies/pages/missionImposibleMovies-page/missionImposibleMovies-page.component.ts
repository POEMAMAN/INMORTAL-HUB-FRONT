
import { MissionImposibleMovie } from '../../interfaces/MissionImposibleMovies.interface';
import { missionImposibleMoviesService } from '../../services/missionImposibleMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missionImposibleMovies-page',
  templateUrl: './missionImposibleMovies-page.component.html',
  styleUrls: ['./missionImposibleMovies-page.component.scss']
})
export class missionImposibleMoviesPageComponent implements OnInit {
  missionImposibleMovies: MissionImposibleMovie[] = []
  constructor(private missionImposibleMoviesService: missionImposibleMoviesService ) {}


  ngOnInit(){
    this.missionImposibleMoviesService.getMissionImposibleMovies().subscribe({
      next: (missionImposibleMovies: MissionImposibleMovie[]) => {
        this.missionImposibleMovies = missionImposibleMovies
      },
      error: () => {}
    })
  }

}
