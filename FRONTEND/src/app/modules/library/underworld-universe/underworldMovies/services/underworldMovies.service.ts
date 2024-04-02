import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { underworldMovie } from '../interfaces/underworldMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class underworldMoviesService {

  

  constructor(private http: HttpClient) { }

  getunderworldMovies(): Observable<underworldMovie[]> {
    return this.http.get<underworldMovie[]>('http://localhost:8084/universes/Underworld/movies');
  }
}

