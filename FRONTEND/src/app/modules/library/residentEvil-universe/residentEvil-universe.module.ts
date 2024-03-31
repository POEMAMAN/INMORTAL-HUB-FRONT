import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { residentEvilUniverseComponent } from './residentEvil-universe.component';
import { residentEvilCharactersModule } from './residentEvilCharacters/residentEvilCharacters.module';
import { residentEvilMarketsModule } from './residentEvilMarkets/residentEvilMarkets.module';
import { residentEvilVideoGamesModule } from './residentEvilVideoGames/residentEvilVideoGames.module';
import { residentEvilUniverseRoutingModule } from './residentEvil-universe-routing.module';
import { HeaderLogoutComponent } from 'src/app/core/header-logout/header-logout.component';
import { residentEvilVideoGamesComponent } from './residentEvilVideoGames/components/residentEvilVideoGames/residentEvilVideoGames.component';
import { residentEvilMoviesModule } from './residentEvilMovies/residentEvilMovies.module';






@NgModule({
  declarations: [
    residentEvilUniverseComponent,


  ],
  imports: [
    CommonModule,
    residentEvilUniverseRoutingModule,
    residentEvilCharactersModule,
    residentEvilMarketsModule,
    residentEvilVideoGamesModule,
    residentEvilMoviesModule

  ]
})
export class residentEvilUniverseModule { };
