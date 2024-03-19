
import { ApesPlanetMovie } from '../interfaces/apesPlanetMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class apesPlanetMoviesService {

  

  constructor(private http: HttpClient) { }

  getApesPlanetMovies(){
      return this.http.get<ApesPlanetMovie[]>('http://localhost:8084/universes/apesPlanet/Movies')
  }
}
