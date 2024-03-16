
import { DuneMarket } from '../interfaces/duneMarkets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class duneMarketsService {

  

  constructor(private http: HttpClient) { }

  getDuneMarkets(){
      return this.http.get<DuneMarket[]>('http://localhost:8084/universes/dune/Markets')
  }
}
