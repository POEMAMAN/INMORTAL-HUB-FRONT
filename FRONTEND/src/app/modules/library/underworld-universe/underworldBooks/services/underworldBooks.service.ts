
import { underworldBook } from '../interfaces/underworldBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class underworldBooksService {

  

  constructor(private http: HttpClient) { }

  getunderworldBooks(){
      return this.http.get<underworldBook[]>('http://localhost:8084/universes/underworld/books')
  }

}
