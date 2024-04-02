
import { backToTheFutureCharacter } from '../interfaces/BackToTheFutureCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class backToTheFutureCharactersService {

  

  constructor(private http: HttpClient) { }

  getbackToTheFutureCharacters(){
      return this.http.get<backToTheFutureCharacter[]>('http://localhost:8084/universes/backToTheFuture/characters')
  }
}
