
import { JurassicParkCharacter } from '../interfaces/JurassicParkCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class jurassicParkCharactersService {

  

  constructor(private http: HttpClient) { }

  getJurassicParkCharacters(){
      return this.http.get<JurassicParkCharacter[]>('http://localhost:8084/universes/jurassicPark/characters')
  }
}
