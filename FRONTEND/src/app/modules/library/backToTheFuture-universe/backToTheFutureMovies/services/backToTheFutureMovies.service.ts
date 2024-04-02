
import { backToTheFutureMovie } from '../interfaces/BackToTheFutureMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class backToTheFutureMoviesService {

  

  constructor(private http: HttpClient) { }

  getbackToTheFutureMovies(){
      return this.http.get<backToTheFutureMovie[]>('http://localhost:8084/universes/backToTheFuture/Movies')
  }
}
