
import { BladeVideoGames } from '../interfaces/BladeVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class bladeVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getBladeVideoGames(){
      return this.http.get<BladeVideoGames[]>('http://localhost:8084/universes/blade/videogames')
  }

}
