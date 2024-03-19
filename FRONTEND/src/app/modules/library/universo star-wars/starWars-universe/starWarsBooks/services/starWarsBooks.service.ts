
import { starWarsBook } from '../interfaces/starWarsBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class starWarsBooksService {

  

  constructor(private http: HttpClient) { }

  getstarWarsBooks(){
      return this.http.get<starWarsBook[]>('http://localhost:8084/universes/starWars/books')
  }

}
