import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { residentEvilMarketsPageComponent } from './pages/residentEvilMarkets-page/residentEvilMarkets-page.component';
import { residentEvilMarketsRoutingModule } from './residentEvilMarkets-routing.module';



@NgModule({
  declarations: [
    residentEvilMarketsPageComponent
  ],
  imports: [
    CommonModule,
    residentEvilMarketsRoutingModule
  ]
})
export class residentEvilMarketsModule { }
