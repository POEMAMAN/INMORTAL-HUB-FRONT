import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { hungerGamesMarketsRoutingModule } from './hungerGamesMarkets-routing.module';
import { hungerGamesMarketsPageComponent } from './pages/hungerGamesMarkets-page/hungerGamesMarkets-page.component';



@NgModule({
  declarations: [
    hungerGamesMarketsPageComponent

  ],
  imports: [
    CommonModule,
    hungerGamesMarketsRoutingModule
  ]
})
export class hungerGamesMarketsModule { }
