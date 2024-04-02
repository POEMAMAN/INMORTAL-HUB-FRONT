
import { underworldCharacter } from '../interfaces/underworldCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class underworldCharactersService {

  

  constructor(private http: HttpClient) { }

  getunderworldCharacters(){
      return this.http.get<underworldCharacter[]>('http://localhost:8084/universes/underworld/characters')
  }
}
