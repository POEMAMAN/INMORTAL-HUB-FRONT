import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LordOfTheRingsComponent } from './lord-of-the-rings/lord-of-the-rings.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';




@NgModule({
  declarations: [
    LordOfTheRingsComponent,
    HarryPotterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
