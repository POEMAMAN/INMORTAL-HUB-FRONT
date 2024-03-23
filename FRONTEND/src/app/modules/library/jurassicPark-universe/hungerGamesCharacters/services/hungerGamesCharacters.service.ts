
import { HungerGamesCharacter } from '../interfaces/HungerGamesCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class hungerGamesCharactersService {

  

  constructor(private http: HttpClient) { }

  getHungerGamesCharacters(){
      return this.http.get<HungerGamesCharacter[]>('http://localhost:8084/universes/hungerGames/characters')
  }
}
