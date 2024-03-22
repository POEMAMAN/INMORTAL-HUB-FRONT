
import { lordOfTheRingsBook } from '../interfaces/lordOfTheRingsBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class lordOfTheRingsBooksService {

  

  constructor(private http: HttpClient) { }

  getlordOfTheRingsBooks(){
      return this.http.get<lordOfTheRingsBook[]>('http://localhost:8084/universes/lordOfTheRings/books')
  }

}
