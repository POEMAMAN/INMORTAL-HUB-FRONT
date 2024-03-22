import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { lordOfTheRingsMarketsRoutingModule } from './lordOfTheRingsMarkets-routing.module';
import { lordOfTheRingsMarketsPageComponent } from './pages/lordOfTheRingsMarkets-page/lordOfTheRingsMarkets-page.component';



@NgModule({
  declarations: [
    lordOfTheRingsMarketsPageComponent

  ],
  imports: [
    CommonModule,
    lordOfTheRingsMarketsRoutingModule
  ]
})
export class lordOfTheRingsMarketsModule { }
