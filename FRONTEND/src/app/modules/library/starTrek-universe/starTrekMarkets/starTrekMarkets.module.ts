import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starTrekMarketsRoutingModule } from './starTrekMarkets-routing.module';
import { starTrekMarketsPageComponent } from './pages/starTrekMarkets-page/starTrekMarkets-page.component';



@NgModule({
  declarations: [
    starTrekMarketsPageComponent

  ],
  imports: [
    CommonModule,
    starTrekMarketsRoutingModule
  ]
})
export class starTrekMarketsModule { }
