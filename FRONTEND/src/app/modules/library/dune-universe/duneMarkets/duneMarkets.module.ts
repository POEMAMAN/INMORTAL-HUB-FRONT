import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { duneMarketsRoutingModule } from './duneMarkets-routing.module';
import { duneMarketsPageComponent } from './pages/duneMarkets-page/duneMarkets-page.component';
import { duneMarketsComponent } from './components/duneMarkets/duneMarkets.component';


@NgModule({
  declarations: [
    duneMarketsPageComponent,
    duneMarketsComponent
  ],
  imports: [
    CommonModule,
    duneMarketsRoutingModule
  ]
})
export class duneMarketsModule { }
