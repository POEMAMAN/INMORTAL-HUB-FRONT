import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { duneMarketsRoutingModule } from './duneMarkets-routing.module';
import { duneMarketsPageComponent } from './pages/duneMarkets-page/duneMarkets-page.component';



@NgModule({
  declarations: [
    duneMarketsPageComponent

  ],
  imports: [
    CommonModule,
    duneMarketsRoutingModule
  ]
})
export class duneMarketsModule { }
