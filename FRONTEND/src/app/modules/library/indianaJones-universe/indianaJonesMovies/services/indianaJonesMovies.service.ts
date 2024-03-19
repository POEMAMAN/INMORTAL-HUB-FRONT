import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndianaJonesMovie } from '../interfaces/IndianaJonesMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class indianaJonesMoviesService {

  

  constructor(private http: HttpClient) { }

  getIndianaJonesMovies(): Observable<IndianaJonesMovie[]> {
    return this.http.get<IndianaJonesMovie[]>('http://localhost:8084/universes/indianaJones/movies');
  }
}

