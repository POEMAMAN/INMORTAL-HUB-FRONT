import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { AlienUniverseModule } from './alien-universe/alien-universe.module';
import { ApesPlanetUniverseModule } from './apesPlanet-universe/apesPlanet-universe.module';
import { BladeUniverseModule } from './blade-universe/blade-universe.module';
import { CrepusculoUniverseModule } from './crepusculo-universe -/crepusculo-universe.module';
import { DuneUniverseModule } from './dune-universe/dune-universe.module';
import { harryPotterBooksModule } from './harryPotter-universe/harryPotterBooks/harryPotterBooks.module';
import { HungerGamesUniverseModule } from './hungerGames-universe/hungerGames-universe.module';
import { indianaJonesUniverseModule } from './indianaJones-universe/indianaJones-universe.module';
import { MissionImposibleUniverseModule } from './missionImposible-universe/missionImposible-universe.module';
import { starWarsUniverseModule } from './starWars-universe/starWars-universe.module';
import { lordOfTheRingsUniverseModule } from './lordOfTheRings-universe/lordOfTheRings-universe.module';
import { transformersUniverseModule } from './transformers-universe/transformers-universe.module';







@NgModule({
  declarations: [

  ],
  imports: [
    LibraryRoutingModule,
    CommonModule,
    AlienUniverseModule,
    ApesPlanetUniverseModule,
    BladeUniverseModule,
    CrepusculoUniverseModule,
    DuneUniverseModule,
    harryPotterBooksModule,
    HungerGamesUniverseModule,
    indianaJonesUniverseModule,
    starWarsUniverseModule,
    MissionImposibleUniverseModule,
    lordOfTheRingsUniverseModule,
    transformersUniverseModule
    
  ],
  exports: [

  ]
})
export class LibraryModule {
  
 }
