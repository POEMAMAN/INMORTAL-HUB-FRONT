import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jurassicParkBooksRoutingModule } from './jurassicParkBooks-routing.module';
import { jurassicParkBooksPageComponent } from './pages/jurassicParkBooks-page/jurassicParkBooks-page.component';
import { jurassicParkBooksComponent } from './components/jurassicParkBooks/jurassicParkBooks.component';


@NgModule({
  declarations: [
    jurassicParkBooksPageComponent,
    jurassicParkBooksComponent
  ],
  imports: [
    CommonModule,
    jurassicParkBooksRoutingModule
  ]
})
export class jurassicParkBooksModule { }
