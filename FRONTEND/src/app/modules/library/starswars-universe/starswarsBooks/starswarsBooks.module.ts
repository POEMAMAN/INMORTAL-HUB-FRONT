import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starswarsBooksRoutingModule } from './starswarsBooks-routing.module';
import { starswarsBooksPageComponent } from './pages/starswarsBooks-page/starswarsBooks-page.component';
import { starswarsBooksComponent } from './components/starswarsBooks/starswarsBooks.component';


@NgModule({
  declarations: [
    starswarsBooksPageComponent,
    starswarsBooksComponent
  ],
  imports: [
    CommonModule,
    starswarsBooksRoutingModule
  ]
})
export class starswarsBooksModule { }
