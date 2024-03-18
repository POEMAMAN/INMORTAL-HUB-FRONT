
import { starswarsMovie } from '../interfaces/starswarsMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class starswarsMoviesService {

  

  constructor(private http: HttpClient) { }

  getstarswarsMovies(){
      return this.http.get<starswarsMovie[]>('http://localhost:8084/universes/starswars/movies')
  }
}
