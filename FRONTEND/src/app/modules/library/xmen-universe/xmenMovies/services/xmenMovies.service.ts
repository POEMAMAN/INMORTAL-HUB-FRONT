
import { xmenMovie } from '../interfaces/xmenMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class xmenMoviesService {

  

  constructor(private http: HttpClient) { }

  getxmenMovies(){
      return this.http.get<xmenMovie[]>('http://localhost:8084/universes/xmen/Movies')
  }
}
