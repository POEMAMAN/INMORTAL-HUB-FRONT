
import { HungerGamesMovie } from '../interfaces/HungerGamesMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class hungerGamesMoviesService {

  

  constructor(private http: HttpClient) { }

  getHungerGamesMovies(){
      return this.http.get<HungerGamesMovie[]>('http://localhost:8084/universes/hungerGames/movies')
  }
}
