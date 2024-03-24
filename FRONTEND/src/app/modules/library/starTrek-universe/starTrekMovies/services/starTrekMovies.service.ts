import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarTrekMovie } from '../interfaces/StarTrekMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class starTrekMoviesService {

  

  constructor(private http: HttpClient) { }

  getStarTrekMovies(): Observable<StarTrekMovie[]> {
    return this.http.get<StarTrekMovie[]>('http://localhost:8084/universes/StarTrek/movies');
  }
}

