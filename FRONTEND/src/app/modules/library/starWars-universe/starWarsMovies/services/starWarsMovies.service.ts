
import { starWarsMovie } from '../interfaces/starWarsMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class starWarsMoviesService {

  

  constructor(private http: HttpClient) { }

  getstarWarsMovies(){
      return this.http.get<starWarsMovie[]>('http://localhost:8084/universes/starWars/movies')
  }
}
