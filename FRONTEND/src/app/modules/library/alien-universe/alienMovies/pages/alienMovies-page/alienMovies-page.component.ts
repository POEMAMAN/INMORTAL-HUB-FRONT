
import { AlienMovie } from '../../interfaces/AlienMovies.interface';
import { alienMoviesService } from '../../services/alienMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alienMovies-page',
  templateUrl: './alienMovies-page.component.html',
  styleUrls: ['./alienMovies-page.component.scss']
})
export class alienMoviesPageComponent implements OnInit {
  alienMovies: AlienMovie[] = []
  constructor(private alienMoviesService: alienMoviesService ) {}


  ngOnInit(){
    this.alienMoviesService.getAlienMovies().subscribe({
      next: (alienMovies: AlienMovie[]) => {
        this.alienMovies = alienMovies
      },
      error: () => {}
    })
  }

}
