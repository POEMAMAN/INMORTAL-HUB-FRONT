
import { ApesPlanetVideoGames } from '../interfaces/apesPlanetVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class apesPlanetVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getApesPlanetVideoGames(){
      return this.http.get<ApesPlanetVideoGames[]>('http://localhost:8084/universes/apesPlanet/videogames')
  }

}
