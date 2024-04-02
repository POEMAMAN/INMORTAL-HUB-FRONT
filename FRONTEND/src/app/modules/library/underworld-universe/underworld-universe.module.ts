import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { underworldUniverseRoutingModule } from './underworld-universe-routing.module';
import { underworldUniverseComponent } from './underworld-universe.component';
import { underworldBooksModule } from './underworldBooks/underworldBooks.module';
import { underworldCharactersModule } from './underworldCharacters/underworldCharacters.module';
import { underworldMarketsModule } from './underworldMarkets/underworldMarkets.module';
import { underworldMoviesModule } from './underworldMovies/underworldMovies.module';






@NgModule({
  declarations: [
    underworldUniverseComponent,

  ],
  imports: [
    CommonModule,
    underworldUniverseRoutingModule,
    underworldBooksModule,
    underworldCharactersModule,
    underworldMarketsModule,
    underworldMoviesModule


  ]
})
export class underworldUniverseModule { };
