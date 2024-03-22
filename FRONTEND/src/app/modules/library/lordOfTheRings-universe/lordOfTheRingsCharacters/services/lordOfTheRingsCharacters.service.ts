
import { lordOfTheRingsCharacter } from '../interfaces/lordOfTheRingsCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class lordOfTheRingsCharactersService {

  

  constructor(private http: HttpClient) { }

  getlordOfTheRingsCharacters(){
      return this.http.get<lordOfTheRingsCharacter[]>('http://localhost:8084/universes/lordOfTheRings/characters')
  }
}
