import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xmenUniverseComponent } from './xmen-universe.component';
import { xmenCharactersModule } from './xmenCharacters/xmenCharacters.module';
import { xmenMarketsModule } from './xmenMarkets/xmenMarkets.module';
import { xmenVideoGamesModule } from './xmenVideoGames/xmenVideoGames.module';
import { xmenUniverseRoutingModule } from './xmen-universe-routing.module';
import { HeaderLogoutComponent } from 'src/app/core/header-logout/header-logout.component';
import { xmenVideoGamesComponent } from './xmenVideoGames/components/xmenVideoGames/xmenVideoGames.component';
import { xmenMoviesModule } from './xmenMovies/xmenMovies.module';






@NgModule({
  declarations: [
    xmenUniverseComponent,


  ],
  imports: [
    CommonModule,
    xmenUniverseRoutingModule,
    xmenCharactersModule,
    xmenMarketsModule,
    xmenVideoGamesModule,
    xmenMoviesModule

  ]
})
export class xmenUniverseModule { };
