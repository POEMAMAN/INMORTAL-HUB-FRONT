import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { harryPotterMarketsRoutingModule } from './harryPotterMarkets-routing.module';
import { harryPotterMarketsPageComponent } from './pages/harryPotterMarkets-page/harryPotterMarkets-page.component';



@NgModule({
  declarations: [
    harryPotterMarketsPageComponent

  ],
  imports: [
    CommonModule,
    harryPotterMarketsRoutingModule
  ]
})
export class harryPotterMarketsModule { }
