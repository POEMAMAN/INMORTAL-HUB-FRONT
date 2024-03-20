import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bladeMarketsPageComponent } from './pages/bladeMarkets-page/bladeMarkets-page.component';
import { bladeMarketsRoutingModule } from './bladeMarkets-routing.module';



@NgModule({
  declarations: [
    bladeMarketsPageComponent

  ],
  imports: [
    CommonModule,
    bladeMarketsRoutingModule
  ]
})
export class bladeMarketsModule { }
