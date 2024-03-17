
import { HungerGamesMovie } from '../../interfaces/HungerGamesMovies.interface';
import { hungerGamesMoviesService } from '../../services/hungerGamesMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hungerGamesMovies-page',
  templateUrl: './hungerGamesMovies-page.component.html',
  styleUrls: ['./hungerGamesMovies-page.component.scss']
})
export class hungerGamesMoviesPageComponent implements OnInit {
  hungerGamesMovies: HungerGamesMovie[] = []
  constructor(private hungerGamesMoviesService: hungerGamesMoviesService ) {}


  ngOnInit(){
    this.hungerGamesMoviesService.getHungerGamesMovies().subscribe({
      next: (hungerGamesMovies: HungerGamesMovie[]) => {
        this.hungerGamesMovies = hungerGamesMovies
      },
      error: () => {}
    })
  }

}
