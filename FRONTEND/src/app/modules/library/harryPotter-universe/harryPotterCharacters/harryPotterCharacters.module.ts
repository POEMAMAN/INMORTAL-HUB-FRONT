import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { harryPotterCharactersRoutingModule } from './harryPotterCharacters-routing.module';
import { harryPotterCharactersPageComponent } from './pages/harryPotterCharacters-page/harryPotterCharacters-page.component';
import { harryPotterCharactersComponent } from './components/harryPotterCharacters/harryPotterCharacters.component';


@NgModule({
  declarations: [
    harryPotterCharactersPageComponent,
    harryPotterCharactersComponent
  ],
  imports: [
    CommonModule,
    harryPotterCharactersRoutingModule,

  ]
})
export class harryPotterCharactersModule { }
