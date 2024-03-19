
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { DuneUniverseModule } from './dune-universe/dune-universe.module';
import { AlienUniverseModule } from './alien-universe/alien-universe.module';
import { HungerGamesUniverseModule } from './hungerGames-universe/hungerGames-universe.module';
import { ApesPlanetUniverseModule } from './apesPlanet-universe/apesPlanet-universe.module';





@NgModule({
  declarations: [
  

  ],
  imports: [
    LibraryRoutingModule,
    CommonModule,
    DuneUniverseModule,
    AlienUniverseModule,
    HungerGamesUniverseModule,
    ApesPlanetUniverseModule
    
  ],
  exports: [
 
  ]
})
export class LibraryModule {
  
 }
