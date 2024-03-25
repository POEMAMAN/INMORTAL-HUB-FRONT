
import { transformersMovie } from '../interfaces/transformersMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class transformersMoviesService {

  

  constructor(private http: HttpClient) { }

  gettransformersMovies(){
      return this.http.get<transformersMovie[]>('http://localhost:8084/universes/transformers/Movies')
  }
}
