import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alienMarketsPageComponent } from './pages/alienMarkets-page/alienMarkets-page.component';
import { alienMarketsRoutingModule } from './alienMarkets-routing.module';



@NgModule({
  declarations: [
    alienMarketsPageComponent

  ],
  imports: [
    CommonModule,
    alienMarketsRoutingModule
  ]
})
export class alienMarketsModule { }
