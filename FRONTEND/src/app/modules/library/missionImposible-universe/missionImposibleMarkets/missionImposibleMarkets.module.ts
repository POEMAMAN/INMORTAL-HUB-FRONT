import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { missionImposibleMarketsPageComponent } from './pages/missionImposibleMarkets-page/missionImposibleMarkets-page.component';
import { missionImposibleMarketsRoutingModule } from './missionImposibleMarkets-routing.module';



@NgModule({
  declarations: [
    missionImposibleMarketsPageComponent

  ],
  imports: [
    CommonModule,
    missionImposibleMarketsRoutingModule
  ]
})
export class missionImposibleMarketsModule { }
