
import { HarryPotterMovie } from '../interfaces/HarryPotterMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class harryPotterMoviesService {

  

  constructor(private http: HttpClient) { }

  getHarryPotterMovies(){
      return this.http.get<HarryPotterMovie[]>('http://localhost:8084/universes/harryPotter/Movies')
  }
}
