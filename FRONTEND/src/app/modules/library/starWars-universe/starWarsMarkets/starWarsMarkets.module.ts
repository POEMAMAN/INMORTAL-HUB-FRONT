import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starWarsMarketsRoutingModule } from './starWarsMarkets-routing.module';
import { starWarsMarketsPageComponent } from './pages/starWarsMarkets-page/starswarsMarkets-page.component';


@NgModule({
  declarations: [
    starWarsMarketsPageComponent
  ],
  imports: [
    CommonModule,
    starWarsMarketsRoutingModule
  ]
})
export class starWarsMarketsModule { }
