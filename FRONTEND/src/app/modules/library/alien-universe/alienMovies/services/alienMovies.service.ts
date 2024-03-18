
import { AlienMovie } from '../interfaces/AlienMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class alienMoviesService {

  

  constructor(private http: HttpClient) { }

  getAlienMovies(){
      return this.http.get<AlienMovie[]>('http://localhost:8084/universes/alien/Movies')
  }
}
