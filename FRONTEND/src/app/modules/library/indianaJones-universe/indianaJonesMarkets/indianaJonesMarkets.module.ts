import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { indianaJonesMarketsRoutingModule } from './indianaJonesMarkets-routing.module';
import { indianaJonesMarketsPageComponent } from './pages/indianaJonesMarkets-page/indianaJonesMarkets-page.component';



@NgModule({
  declarations: [
    indianaJonesMarketsPageComponent

  ],
  imports: [
    CommonModule,
    indianaJonesMarketsRoutingModule
  ]
})
export class indianaJonesMarketsModule { }
