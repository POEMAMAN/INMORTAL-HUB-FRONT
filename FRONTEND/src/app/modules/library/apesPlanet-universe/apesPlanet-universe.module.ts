import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { apesPlanetCharactersModule } from './apesPlanetCharacters/apesPlanetCharacters.module';

import { apesPlanetUniverseRoutingModule } from './apesPlanet-universe-routing.module';
import { ApesPlanetUniverseComponent } from './apesPlanet-universe.component';
import { apesPlanetMarketsModule } from './apesPlanetMarkets/apesPlanetMarkets.module';
import { apesPlanetMoviesModule } from './apesPlanetMovies/apesPlanetMovies.module';
import { apesPlanetVideoGamesModule } from './apesPlanetVideoGames/apesPlanetVideoGames.module';






@NgModule({
  declarations: [
    ApesPlanetUniverseComponent

  ],
  imports: [
    CommonModule,
    apesPlanetUniverseRoutingModule,
    apesPlanetCharactersModule,
    apesPlanetMarketsModule,
    apesPlanetMoviesModule,
    apesPlanetVideoGamesModule
    


  ]
})
export class ApesPlanetUniverseModule { };
