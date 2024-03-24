import { terminatorVideoGamesModule } from './terminatorVideoGames/terminatorGames.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminatorUniverseComponent } from './terminator-universe.component';
import { terminatorUniverseRoutingModule } from './terminator-universe-routing.module';
import { terminatorCharactersModule } from './terminatorCharacters/terminatorCharacters.module';
import { terminatorMarketsModule } from './terminatorMarkets/terminatorMarkets.module';
import { terminatorMoviesModule } from './terminatorMovies/terminatorMovies.module';

@NgModule({
  declarations: [
    TerminatorUniverseComponent

  ],
  imports: [
    CommonModule,
    terminatorUniverseRoutingModule,
    terminatorCharactersModule,
    terminatorMarketsModule,
    terminatorMoviesModule,
    terminatorVideoGamesModule
    


  ]
})
export class terminatorUniverseModule { };
