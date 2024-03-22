import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrepusculoMovie } from '../interfaces/CrepusculoMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class crepusculoMoviesService {

  

  constructor(private http: HttpClient) { }

  getCrepusculoMovies(): Observable<CrepusculoMovie[]> {
    return this.http.get<CrepusculoMovie[]>('http://localhost:8084/universes/crepusculo/movies');
  }
}

