import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jurassicParkMarketsRoutingModule } from './jurassicParkMarkets-routing.module';
import { jurassicParkMarketsPageComponent } from './pages/jurassicParkMarkets-page/jurassicParkMarkets-page.component';



@NgModule({
  declarations: [
    jurassicParkMarketsPageComponent

  ],
  imports: [
    CommonModule,
    jurassicParkMarketsRoutingModule
  ]
})
export class jurassicParkMarketsModule { }
