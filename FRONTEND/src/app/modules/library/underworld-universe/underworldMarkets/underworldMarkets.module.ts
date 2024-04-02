import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { underworldMarketsRoutingModule } from './underworldMarkets-routing.module';
import { underworldMarketsPageComponent } from './pages/underworldMarkets-page/underworldMarkets-page.component';



@NgModule({
  declarations: [
    underworldMarketsPageComponent

  ],
  imports: [
    CommonModule,
    underworldMarketsRoutingModule
  ]
})
export class underworldMarketsModule { }
