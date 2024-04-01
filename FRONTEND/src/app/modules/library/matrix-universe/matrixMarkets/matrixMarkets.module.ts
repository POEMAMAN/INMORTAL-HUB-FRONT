import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { matrixMarketsPageComponent } from './pages/matrixMarkets-page/matrixMarkets-page.component';
import { matrixMarketsRoutingModule } from './matrixMarkets-routing.module';



@NgModule({
  declarations: [
    matrixMarketsPageComponent

  ],
  imports: [
    CommonModule,
    matrixMarketsRoutingModule
  ]
})
export class matrixMarketsModule { }
