import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlienUniverseComponent } from './alien-universe.component';
import { alienVideoGamesComponent } from './alienVideoGames/components/alienVideoGames/alienVideoGames.component';
import { alienCharactersModule } from './alienCharacters/alienCharacters.module';
import { alienMarketsModule } from './alienMarkets/alienMarkets.module';
import { alienMoviesModule } from './alienMovies/alienMovies.module';
import { alienVideoGamesModule } from './alienVideoGames/alienVideoGames.module';
import { AlienUniverseRoutingModule } from './alien-universe-routing.module';
import { HeaderLogoutComponent } from 'src/app/core/header-logout/header-logout.component';






@NgModule({
  declarations: [
    AlienUniverseComponent,


  ],
  imports: [
    CommonModule,
    AlienUniverseRoutingModule,
    alienCharactersModule,
    alienMarketsModule,
    alienMoviesModule,
    alienVideoGamesModule
    


  ]
})
export class AlienUniverseModule { };
