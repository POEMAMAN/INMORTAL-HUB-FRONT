
import { transformersCharacter } from '../interfaces/transformersCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class transformersCharactersService {

  

  constructor(private http: HttpClient) { }

  gettransformersCharacters(){
      return this.http.get<transformersCharacter[]>('http://localhost:8084/universes/transformers/characters')
  }
}
