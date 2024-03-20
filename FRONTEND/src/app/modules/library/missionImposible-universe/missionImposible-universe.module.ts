import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionImposibleUniverseComponent } from './missionImposible-universe.component';
import { missionImposibleVideoGamesComponent } from './missionImposibleVideoGames/components/missionImposibleVideoGames/missionImposibleVideoGames.component';
import { missionImposibleCharactersModule } from './missionImposibleCharacters/missionImposibleCharacters.module';
import { missionImposibleMarketsModule } from './missionImposibleMarkets/missionImposibleMarkets.module';
import { missionImposibleMoviesModule } from './missionImposibleMovies/missionImposibleMovies.module';
import { missionImposibleVideoGamesModule } from './missionImposibleVideoGames/missionImposibleVideoGames.module';
import { MissionImposibleUniverseRoutingModule } from './missionImposible-universe-routing.module';
import { HeaderLogoutComponent } from 'src/app/core/header-logout/header-logout.component';






@NgModule({
  declarations: [
    MissionImposibleUniverseComponent,


  ],
  imports: [
    CommonModule,
    MissionImposibleUniverseRoutingModule,
    missionImposibleCharactersModule,
    missionImposibleMarketsModule,
    missionImposibleMoviesModule,
    missionImposibleVideoGamesModule
    


  ]
})
export class MissionImposibleUniverseModule { };
