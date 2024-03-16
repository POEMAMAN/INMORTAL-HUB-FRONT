import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuneUniverseRoutingModule } from './dune-universe-routing.module';
import { DuneUniverseComponent } from './dune-universe.component';
import { duneBooksModule } from './duneBooks/duneBooks.module';
import { duneCharactersModule } from './duneCharacters/duneCharacters.module';
import { duneMarketsModule } from './duneMarkets/duneMarkets.module';
import { duneMoviesModule } from './duneMovies/duneMovies.module';





@NgModule({
  declarations: [
    DuneUniverseComponent


  ],
  imports: [
    CommonModule,
    DuneUniverseRoutingModule,
    duneBooksModule,
    duneCharactersModule,
    duneMarketsModule,
    duneMoviesModule

  ]
})
export class DuneUniverseModule { };
