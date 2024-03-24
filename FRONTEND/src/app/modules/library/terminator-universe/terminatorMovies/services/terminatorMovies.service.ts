
import { TerminatorMovie } from '../interfaces/TerminatorMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class terminatorMoviesService {

  

  constructor(private http: HttpClient) { }

  getTerminatorMovies(){
      return this.http.get<TerminatorMovie[]>('http://localhost:8084/universes/terminator/movies')
  }
}
