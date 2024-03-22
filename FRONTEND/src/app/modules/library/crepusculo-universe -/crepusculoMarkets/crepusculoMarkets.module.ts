import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crepusculoMarketsRoutingModule } from './crepusculoMarkets-routing.module';
import { crepusculoMarketsPageComponent } from './pages/crepusculoMarkets-page/crepusculoMarkets-page.component';



@NgModule({
  declarations: [
    crepusculoMarketsPageComponent

  ],
  imports: [
    CommonModule,
    crepusculoMarketsRoutingModule
  ]
})
export class crepusculoMarketsModule { }
