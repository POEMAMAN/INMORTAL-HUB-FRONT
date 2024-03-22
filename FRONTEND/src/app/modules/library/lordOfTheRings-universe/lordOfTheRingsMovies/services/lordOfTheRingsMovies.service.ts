import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { lordOfTheRingsMovie } from '../interfaces/lordOfTheRingsMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class lordOfTheRingsMoviesService {

  

  constructor(private http: HttpClient) { }

  getlordOfTheRingsMovies(): Observable<lordOfTheRingsMovie[]> {
    return this.http.get<lordOfTheRingsMovie[]>('http://localhost:8084/universes/lordOfTheRings/movies');
  }
}

