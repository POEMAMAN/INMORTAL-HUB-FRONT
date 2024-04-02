import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { backToTheFutureUniverseComponent } from './backToTheFuture-universe.component';


import { HeaderLogoutComponent } from 'src/app/core/header-logout/header-logout.component';
import { backToTheFutureUniverseRoutingModule } from './backToTheFuture-universe-routing.module';
import { backToTheFutureCharactersModule } from './backToTheFutureCharacters/backToTheFutureCharacters.module';
import { backToTheFutureMarketsModule } from './backToTheFutureMarkets/backToTheFutureMarkets.module';
import { backToTheFutureMoviesRoutingModule } from './backToTheFutureMovies/backToTheFutureMovies-routing.module';
import { backToTheFutureVideoGamesModule } from './backtToTheFutureVideoGames/backToTheFutureVideoGames.module';

@NgModule({
  declarations: [
    backToTheFutureUniverseComponent,


  ],
  imports: [
    CommonModule,
    backToTheFutureUniverseRoutingModule,
    backToTheFutureCharactersModule,
    backToTheFutureMarketsModule,
    backToTheFutureMoviesRoutingModule,
    backToTheFutureVideoGamesModule
    


  ]
})
export class backToTheFutureUniverseModule { };
