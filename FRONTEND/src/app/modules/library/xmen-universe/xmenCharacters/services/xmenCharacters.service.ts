
import { xmenCharacter } from '../interfaces/xmenCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class xmenCharactersService {

  

  constructor(private http: HttpClient) { }

  getxmenCharacters(){
      return this.http.get<xmenCharacter[]>('http://localhost:8084/universes/xmen/characters')
  }
}
