import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { underworldBooksRoutingModule } from './underworldBooks-routing.module';
import { underworldBooksPageComponent } from './pages/underworldBooks-page/underworldBooks-page.component';
import { underworldBooksComponent } from './components/underworldBooks/underworldBooks.component';


@NgModule({
  declarations: [
    underworldBooksPageComponent,
    underworldBooksComponent
  ],
  imports: [
    CommonModule,
    underworldBooksRoutingModule
  ]
})
export class underworldBooksModule { }
