import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HungerGamesUniverseRoutingModule } from './hungerGames-universe-routing.module';
import { HungerGamesUniverseComponent } from './hungerGames-universe.component';
import { hungerGamesBooksModule } from './hungerGamesBooks/hungerGamesBooks.module';
import { hungerGamesCharactersModule } from './hungerGamesCharacters/hungerGamesCharacters.module';
import { hungerGamesMarketsModule } from './hungerGamesMarkets/hungerGamesMarkets.module';
import { hungerGamesMoviesModule } from './hungerGamesMovies/hungerGamesMovies.module';






@NgModule({
  declarations: [
    HungerGamesUniverseComponent,

  ],
  imports: [
    CommonModule,
    HungerGamesUniverseRoutingModule,
    hungerGamesBooksModule,
    hungerGamesCharactersModule,
    hungerGamesMarketsModule,
    hungerGamesMoviesModule


  ]
})
export class HungerGamesUniverseModule { };
