
import { AlienMovie } from '../interfaces/AlienMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class alienMoviesService {

  

  constructor(private http: HttpClient) { }

  getAlienMovies(){
      return this.http.get<AlienMovie[]>('https://importal-hub-back-a54zucve2-inmortal-hubs-projects.vercel.app//universes/alien/Movies')
  }
}
