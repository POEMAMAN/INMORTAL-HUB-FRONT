import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DuneMovie } from '../interfaces/DuneMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class duneMoviesService {

  

  constructor(private http: HttpClient) { }

  getDuneMovies(): Observable<DuneMovie[]> {
    return this.http.get<DuneMovie[]>('http://localhost:8084/universes/dune/movies');
  }
}

