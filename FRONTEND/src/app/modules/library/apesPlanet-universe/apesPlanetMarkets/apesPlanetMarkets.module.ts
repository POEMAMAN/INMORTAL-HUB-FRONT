import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apesPlanetMarketsPageComponent } from './pages/apesPlanetMarkets-page/apesPlanetMarkets-page.component';
import { apesPlanetMarketsRoutingModule } from './apesPlanetMarkets-routing.module';



@NgModule({
  declarations: [
    apesPlanetMarketsPageComponent

  ],
  imports: [
    CommonModule,
    apesPlanetMarketsRoutingModule
  ]
})
export class apesPlanetMarketsModule { }
