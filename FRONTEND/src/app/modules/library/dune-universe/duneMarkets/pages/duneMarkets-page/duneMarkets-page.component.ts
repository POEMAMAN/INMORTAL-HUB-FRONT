
import { DuneMarket } from '../../interfaces/duneMarkets.interface';
import { duneMarketsService } from '../../services/duneMarkets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duneMarkets-page',
  templateUrl: './duneMarkets-page.component.html',
  styleUrls: ['./duneMarkets-page.component.scss']
})
export class duneMarketsPageComponent implements OnInit {
  duneMarkets: DuneMarket[] = []
  constructor(private duneMarketsService: duneMarketsService ) {}


  ngOnInit(){
    this.duneMarketsService.getDuneMarkets().subscribe({
      next: (duneMarkets: DuneMarket[]) => {
        this.duneMarkets = duneMarkets
      },
      error: () => {}
    })
  }

}
