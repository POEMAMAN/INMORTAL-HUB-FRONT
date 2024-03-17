
import { HungerGamesBook } from '../interfaces/HungerGamesBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class hungerGamesBooksService {

  

  constructor(private http: HttpClient) { }

  getHungerGamesBooks(){
      return this.http.get<HungerGamesBook[]>('http://localhost:8084/universes/hungerGames/books')
  }

}
