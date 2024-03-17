
import { AlienCharacter } from '../interfaces/AlienCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class alienCharactersService {

  

  constructor(private http: HttpClient) { }

  getAlienCharacters(){
      return this.http.get<AlienCharacter[]>('http://localhost:8084/universes/alien/characters')
  }
}
