
import { MissionImposibleMovie } from '../interfaces/MissionImposibleMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class missionImposibleMoviesService {

  

  constructor(private http: HttpClient) { }

  getMissionImposibleMovies(){
      return this.http.get<MissionImposibleMovie[]>('http://localhost:8084/universes/missionImposible/Movies')
  }
}
