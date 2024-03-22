
import { CrepusculoBook } from '../interfaces/CrepusculoBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class crepusculoBooksService {

  

  constructor(private http: HttpClient) { }

  getCrepusculoBooks(){
      return this.http.get<CrepusculoBook[]>('http://localhost:8084/universes/crepusculo/books')
  }

}
