
import { BladeCharacter } from '../interfaces/BladeCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class bladeCharactersService {

  

  constructor(private http: HttpClient) { }

  getBladeCharacters(){
      return this.http.get<BladeCharacter[]>('http://localhost:8084/universes/blade/characters')
  }
}
