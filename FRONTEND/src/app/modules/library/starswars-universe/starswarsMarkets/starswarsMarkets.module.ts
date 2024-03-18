import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starswarsMarketsRoutingModule } from './starswarsMarkets-routing.module';
import { starswarsMarketsPageComponent } from './pages/starswarsMarkets-page/starswarsMarkets-page.component';



@NgModule({
  declarations: [
    starswarsMarketsPageComponent

  ],
  imports: [
    CommonModule,
    starswarsMarketsRoutingModule
  ]
})
export class starswarsMarketsModule { }
