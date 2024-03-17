
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { DuneUniverseModule } from './dune-universe/dune-universe.module';
import { AlienUniverseModule } from './alien-universe/alien-universe.module';
import { HungerGamesUniverseModule } from './hungerGames-universe/hungerGames-universe.module';





@NgModule({
  declarations: [
  

  ],
  imports: [
    LibraryRoutingModule,
    CommonModule,
    DuneUniverseModule,
    AlienUniverseModule,
    HungerGamesUniverseModule
  ],
  exports: [
 
  ]
})
export class LibraryModule {
  
 }
