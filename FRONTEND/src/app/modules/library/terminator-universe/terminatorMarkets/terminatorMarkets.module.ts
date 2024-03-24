import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { terminatorMarketsPageComponent } from './pages/terminatorMarkets-page/terminatorMarkets-page.component';
import { terminatorMarketsRoutingModule } from './terminatorMarkets-routing.module';



@NgModule({
  declarations: [
    terminatorMarketsPageComponent

  ],
  imports: [
    CommonModule,
    terminatorMarketsRoutingModule
  ]
})
export class terminatorMarketsModule { }
