import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starTrekBooksRoutingModule } from './starTrekBooks-routing.module';
import { starTrekBooksPageComponent } from './pages/starTrekBooks-page/starTrekBooks-page.component';
import { starTrekBooksComponent } from './components/starTrekBooks/starTrekBooks.component';


@NgModule({
  declarations: [
    starTrekBooksPageComponent,
    starTrekBooksComponent
  ],
  imports: [
    CommonModule,
    starTrekBooksRoutingModule
  ]
})
export class starTrekBooksModule { }
