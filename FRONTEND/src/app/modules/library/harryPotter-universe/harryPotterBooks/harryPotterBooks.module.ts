import { harryPotterBooksComponent } from './components/harryPotterBooks/harryPotterBooks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { harryPotterBooksRoutingModule } from './harryPotterBooks-routing.module';
import { harryPotterBooksPageComponent } from './pages/harryPotterBooks-page/harryPotterBooks-page.component';


@NgModule({
  declarations: [
    harryPotterBooksPageComponent,
    harryPotterBooksComponent
  ],
  imports: [
    CommonModule,
    harryPotterBooksRoutingModule
  ]
})
export class harryPotterBooksModule { }
