import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { indianaJonesCharactersRoutingModule } from './indianaJonesCharacters-routing.module';
import { indianaJonesCharactersPageComponent } from './pages/indianaJonesCharacters-page/indianaJonesCharacters-page.component';
import { indianaJonesCharactersComponent } from './components/indianaJonesCharacters/indianaJonesCharacters.component';


@NgModule({
  declarations: [
    indianaJonesCharactersComponent,
    indianaJonesCharactersPageComponent
  ],
  imports: [
    CommonModule,
    indianaJonesCharactersRoutingModule,

  ]
})
export class indianaJonesCharactersModule { }
