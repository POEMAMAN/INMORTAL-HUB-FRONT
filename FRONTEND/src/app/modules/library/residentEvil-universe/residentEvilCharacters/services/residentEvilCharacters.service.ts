
import { residentEvilCharacter } from '../interfaces/residentEvilCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class residentEvilCharactersService {

  

  constructor(private http: HttpClient) { }

  getresidentEvilCharacters(){
      return this.http.get<residentEvilCharacter[]>('http://localhost:8084/universes/residentEvil/characters')
  }
}
