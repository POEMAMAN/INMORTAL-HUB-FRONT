
import { residentEvilVideoGames } from '../interfaces/residentEvilVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class residentEvilVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getresidentEvilVideoGames(){
      return this.http.get<residentEvilVideoGames[]>('http://localhost:8084/universes/residentEvil/videogames')
  }

}
