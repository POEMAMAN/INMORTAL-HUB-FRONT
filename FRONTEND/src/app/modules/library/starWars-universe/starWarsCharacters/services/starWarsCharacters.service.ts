
import { starWarsCharacter } from '../interfaces/starWarsCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class starWarsCharactersService {

  

  constructor(private http: HttpClient) { }

  getstarWarsCharacters(){
      return this.http.get<starWarsCharacter[]>('http://localhost:8084/universes/starWars/characters')
  }
}
