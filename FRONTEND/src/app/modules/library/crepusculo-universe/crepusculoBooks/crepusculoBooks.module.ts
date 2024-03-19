import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crepusculoBooksRoutingModule } from './crepusculoBooks-routing.module';
import { crepusculoBooksPageComponent } from './pages/crepusculoBooks-page/crepusculoBooks-page.component';
import { crepusculoBooksComponent } from './components/crepusculoBooks/crepusculoBooks.component';


@NgModule({
  declarations: [
    crepusculoBooksPageComponent,
    crepusculoBooksComponent
  ],
  imports: [
    CommonModule,
    crepusculoBooksRoutingModule
  ]
})
export class crepusculoBooksModule { }
