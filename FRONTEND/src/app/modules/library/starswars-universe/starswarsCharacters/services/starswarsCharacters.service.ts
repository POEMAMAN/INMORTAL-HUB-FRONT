
import { starswarsCharacter } from '../interfaces/starswarsCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class starswarsCharactersService {

  

  constructor(private http: HttpClient) { }

  getstarswarsCharacters(){
      return this.http.get<starswarsCharacter[]>('http://localhost:8084/universes/starswars/characters')
  }
}
