import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transformersUniverseComponent } from './transformers-universe.component';
import { transformersCharactersModule } from './transformersCharacters/transformersCharacters.module';
import { transformersMarketsModule } from './transformersMarkets/transformersMarkets.module';
import { transformersVideoGamesModule } from './transformersVideoGames/transformersVideoGames.module';
import { transformersUniverseRoutingModule } from './transformers-universe-routing.module';
import { HeaderLogoutComponent } from 'src/app/core/header-logout/header-logout.component';
import { transformersMoviesModule } from './transformersMovies/transformersMovies.module';
import { transformersVideoGamesComponent } from './transformersVideoGames/components/transformersVideoGames/transformersVideoGames.component';






@NgModule({
  declarations: [
    transformersUniverseComponent,


  ],
  imports: [
    CommonModule,
    transformersUniverseRoutingModule,
    transformersCharactersModule,
    transformersMarketsModule,
    transformersMoviesModule,
    transformersVideoGamesModule,

  ]
})
export class transformersUniverseModule { };
