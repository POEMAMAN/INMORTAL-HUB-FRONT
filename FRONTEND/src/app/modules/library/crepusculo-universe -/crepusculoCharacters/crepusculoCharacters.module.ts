import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crepusculoCharactersRoutingModule } from './crepusculoCharacters-routing.module';
import { crepusculoCharactersPageComponent } from './pages/crepusculoCharacters-page/crepusculoCharacters-page.component';
import { crepusculoCharactersComponent } from './components/crepusculoCharacters/crepusculoCharacters.component';


@NgModule({
  declarations: [
    crepusculoCharactersComponent,
    crepusculoCharactersPageComponent
  ],
  imports: [
    CommonModule,
    crepusculoCharactersRoutingModule,

  ]
})
export class crepusculoCharactersModule { }
