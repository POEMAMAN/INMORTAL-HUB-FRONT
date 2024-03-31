
import { residentEvilMovie } from '../interfaces/residentEvilMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class residentEvilMoviesService {

  

  constructor(private http: HttpClient) { }

  getresidentEvilMovies(){
      return this.http.get<residentEvilMovie[]>('http://localhost:8084/universes/residentEvil/Movies')
  }
}
