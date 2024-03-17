
import { AlienVideoGames } from '../interfaces/AlienVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class alienVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getAlienVideoGames(){
      return this.http.get<AlienVideoGames[]>('http://localhost:8084/universes/alien/videogames')
  }

}
