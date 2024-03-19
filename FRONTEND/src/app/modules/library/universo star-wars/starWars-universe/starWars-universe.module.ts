import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starWarsUniverseRoutingModule } from './starWars-universe-routing.module';
import { starWarsUniverseComponent } from './starWars-universe.component';
import { starWarsBooksModule } from './starWarsBooks/starWarsBooks.module';
import { starWarsCharactersModule } from './starWarsCharacters/starWarsCharacters.module';
import { starWarsMarketsModule } from './starWarsMarkets/starWarsMarkets.module';
import { starWarsMoviesModule } from './starWarsMovies/starWarsMovies.module';






@NgModule({
  declarations: [
    starWarsUniverseComponent,

  ],
  imports: [
    CommonModule,
    starWarsUniverseRoutingModule,
    starWarsBooksModule,
    starWarsCharactersModule,
    starWarsMarketsModule,
    starWarsMoviesModule


  ]
})
export class starWarsUniverseModule { };
