import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xmenMarketsPageComponent } from './pages/xmenMarkets-page/xmenMarkets-page.component';
import { xmenMarketsRoutingModule } from './xmenMarkets-routing.module';



@NgModule({
  declarations: [
    xmenMarketsPageComponent

  ],
  imports: [
    CommonModule,
    xmenMarketsRoutingModule
  ]
})
export class xmenMarketsModule { }
