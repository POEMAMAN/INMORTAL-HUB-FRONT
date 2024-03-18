import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { hungerGamesCharactersRoutingModule } from './hungerGamesCharacters-routing.module';
import { hungerGamesCharactersPageComponent } from './pages/hungerGamesCharacters-page/hungerGamesCharacters-page.component';
import { hungerGamesCharactersComponent } from './components/hungerGamesCharacters/hungerGamesCharacters.component';


@NgModule({
  declarations: [
    hungerGamesCharactersComponent,
    hungerGamesCharactersPageComponent
  ],
  imports: [
    CommonModule,
    hungerGamesCharactersRoutingModule,

  ]
})
export class hungerGamesCharactersModule { }
