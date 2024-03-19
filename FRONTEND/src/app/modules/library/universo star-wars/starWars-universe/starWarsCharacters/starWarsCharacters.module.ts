import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starWarsCharactersRoutingModule } from './starWarsCharacters-routing.module';
import { starWarsCharactersPageComponent } from './pages/starWarsCharacters-page/starWarsCharacters-page.component';
import { starWarsCharactersComponent } from './components/starWarsCharacters/starWarsCharacters.component';


@NgModule({
  declarations: [
    starWarsCharactersComponent,
    starWarsCharactersPageComponent
  ],
  imports: [
    CommonModule,
    starWarsCharactersRoutingModule,

  ]
})
export class starWarsCharactersModule { }
