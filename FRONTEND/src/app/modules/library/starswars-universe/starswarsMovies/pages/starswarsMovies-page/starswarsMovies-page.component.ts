
import { starswarsMovie } from '../../interfaces/starswarsMovies.interface';
import { starswarsMoviesService } from '../../services/starswarsMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starswarsMovies-page',
  templateUrl: './starswarsMovies-page.component.html',
  styleUrls: ['./starswarsMovies-page.component.scss']
})
export class starswarsMoviesPageComponent implements OnInit {
  starswarsMovies: starswarsMovie[] = []
  constructor(private starswarsMoviesService: starswarsMoviesService ) {}


  ngOnInit(){
    this.starswarsMoviesService.getstarswarsMovies().subscribe({
      next: (starswarsMovies: starswarsMovie[]) => {
        this.starswarsMovies = starswarsMovies
      },
      error: () => {}
    })
  }

}
