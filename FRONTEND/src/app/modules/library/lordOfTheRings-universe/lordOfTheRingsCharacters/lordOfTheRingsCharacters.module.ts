import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { lordOfTheRingsCharactersRoutingModule } from './lordOfTheRingsCharacters-routing.module';
import { lordOfTheRingsCharactersPageComponent } from './pages/lordOfTheRingsCharacters-page/lordOfTheRingsCharacters-page.component';
import { lordOfTheRingsCharactersComponent } from './components/lordOfTheRingsCharacters/lordOfTheRingsCharacters.component';


@NgModule({
  declarations: [
    lordOfTheRingsCharactersComponent,
    lordOfTheRingsCharactersPageComponent
  ],
  imports: [
    CommonModule,
    lordOfTheRingsCharactersRoutingModule,

  ]
})
export class lordOfTheRingsCharactersModule { }
