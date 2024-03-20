import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BladeUniverseComponent } from './blade-universe.component';
import { bladeVideoGamesComponent } from './bladeVideoGames/components/bladeVideoGames/bladeVideoGames.component';
import { bladeCharactersModule } from './bladeCharacters/bladeCharacters.module';
import { bladeMarketsModule } from './bladeMarkets/bladeMarkets.module';
import { bladeMoviesModule } from './bladeMovies/bladeMovies.module';
import { bladeVideoGamesModule } from './bladeVideoGames/bladeVideoGames.module';
import { BladeUniverseRoutingModule } from './blade-universe-routing.module';
import { HeaderLogoutComponent } from 'src/app/core/header-logout/header-logout.component';






@NgModule({
  declarations: [
    BladeUniverseComponent,


  ],
  imports: [
    CommonModule,
    BladeUniverseRoutingModule,
    bladeCharactersModule,
    bladeMarketsModule,
    bladeMoviesModule,
    bladeVideoGamesModule
    


  ]
})
export class BladeUniverseModule { };
