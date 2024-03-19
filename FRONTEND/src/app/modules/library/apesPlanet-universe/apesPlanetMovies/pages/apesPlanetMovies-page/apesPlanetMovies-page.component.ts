
import { ApesPlanetMovie } from '../../interfaces/apesPlanetMovies.interface';
import { apesPlanetMoviesService } from '../../services/apesPlanetMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apesPlanetMovies-page',
  templateUrl: './apesPlanetMovies-page.component.html',
  styleUrls: ['./apesPlanetMovies-page.component.scss']
})
export class apesPlanetMoviesPageComponent implements OnInit {
  apesPlanetMovies: ApesPlanetMovie[] = []
  constructor(private apesPlanetMoviesService: apesPlanetMoviesService ) {}


  ngOnInit(){
    this.apesPlanetMoviesService.getApesPlanetMovies().subscribe({
      next: (apesPlanetMovies: ApesPlanetMovie[]) => {
        this.apesPlanetMovies = apesPlanetMovies
      },
      error: () => {}
    })
  }

}
