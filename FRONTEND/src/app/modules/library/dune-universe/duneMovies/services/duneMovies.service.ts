
import { DuneMovie } from '../interfaces/DuneMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class duneMoviesService {

  

  constructor(private http: HttpClient) { }

  getDuneMovies(){
      return this.http.get<DuneMovie[]>('http://localhost:8084/universes/dune/movies')
  }
}
