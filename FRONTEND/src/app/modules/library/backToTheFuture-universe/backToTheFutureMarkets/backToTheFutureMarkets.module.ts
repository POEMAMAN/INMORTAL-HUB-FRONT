import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { backToTheFutureMarketsPageComponent } from './pages/backToTheFutureMarkets-page/backToTheFutureMarkets-page.component';
import { backToTheFutureMarketsRoutingModule } from './backToTheFutureMarkets-routing.module';



@NgModule({
  declarations: [
    backToTheFutureMarketsPageComponent

  ],
  imports: [
    CommonModule,
    backToTheFutureMarketsRoutingModule
  ]
})
export class backToTheFutureMarketsModule { }
