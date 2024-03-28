
import { xmenVideoGames } from '../interfaces/xmenVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class xmenVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getxmenVideoGames(){
      return this.http.get<xmenVideoGames[]>('http://localhost:8084/universes/xmen/videogames')
  }

}
