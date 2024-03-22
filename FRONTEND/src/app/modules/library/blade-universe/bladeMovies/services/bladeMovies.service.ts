
import { BladeMovie } from '../interfaces/BladeMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class bladeMoviesService {

  

  constructor(private http: HttpClient) { }

  getBladeMovies(){
      return this.http.get<BladeMovie[]>('http://localhost:8084/universes/blade/Movies')
  }
}
