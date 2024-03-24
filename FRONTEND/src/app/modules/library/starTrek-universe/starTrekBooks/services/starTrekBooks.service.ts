
import { StarTrekBook } from '../interfaces/StarTrekBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class starTrekBooksService {

  

  constructor(private http: HttpClient) { }

  getStarTrekBooks(){
      return this.http.get<StarTrekBook[]>('http://localhost:8084/universes/starTrek/books')
  }

}
