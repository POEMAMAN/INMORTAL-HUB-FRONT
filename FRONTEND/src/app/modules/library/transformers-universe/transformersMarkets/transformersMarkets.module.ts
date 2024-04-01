import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transformersMarketsPageComponent } from './pages/transformersMarkets-page/transformersMarkets-page.component';
import { transformersMarketsRoutingModule } from './transformersMarkets-routing.module';



@NgModule({
  declarations: [
    transformersMarketsPageComponent

  ],
  imports: [
    CommonModule,
    transformersMarketsRoutingModule
  ]
})
export class transformersMarketsModule { }
