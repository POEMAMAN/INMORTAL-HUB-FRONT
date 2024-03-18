import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { harryPotterBooksModule } from './harryPotterBooks/harryPotterBooks.module';
import { HarryPotterUniverseComponent } from './harryPotter-universe.component';
import { harryPotterBooksRoutingModule } from './harryPotterBooks/harryPotterBooks-routing.module';
import { harryPotterMoviesModule } from './harryPotterMovies/harryPotterMovies.module';
import { harryPotterMarketsModule } from './harryPotterMarkets/harryPotterMarkets.module';
import { harryPotterCharactersModule } from './harryPotterCharacters/harryPotterCharacters.module';
import { HarryPotterUniverseRoutingModule } from './harryPotter-universe-routing.module';






@NgModule({
  declarations: [
    HarryPotterUniverseComponent,

  ],
  imports: [
    CommonModule,
    HarryPotterUniverseRoutingModule,
    harryPotterBooksModule,
    harryPotterCharactersModule,
    harryPotterMarketsModule,
    harryPotterMoviesModule


  ]
})
export class HarryPotterUniverseModule { };
