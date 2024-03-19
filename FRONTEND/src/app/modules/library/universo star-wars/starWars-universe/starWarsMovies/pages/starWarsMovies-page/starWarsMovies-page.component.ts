
import { starWarsMovie } from '../../interfaces/starWarsMovies.interface';
import { starWarsMoviesService } from '../../services/starWarsMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starWarsMovies-page',
  templateUrl: './starWarsMovies-page.component.html',
  styleUrls: ['./starWarsMovies-page.component.scss']
})
export class starWarsMoviesPageComponent implements OnInit {
  starWarsMovies: starWarsMovie[] = []
  constructor(private starWarsMoviesService: starWarsMoviesService ) {}


  ngOnInit(){
    this.starWarsMoviesService.getstarWarsMovies().subscribe({
      next: (starWarsMovies: starWarsMovie[]) => {
        this.starWarsMovies = starWarsMovies
      },
      error: () => {}
    })
  }

}
