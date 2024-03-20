
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { DuneUniverseModule } from './dune-universe/dune-universe.module';
import { AlienUniverseModule } from './alien-universe/alien-universe.module';
import { HungerGamesUniverseModule } from './hungerGames-universe/hungerGames-universe.module';
import { ApesPlanetUniverseModule } from './apesPlanet-universe/apesPlanet-universe.module';
import { CrepusculoUniverseModule } from './crepusculo-universe/crepusculo-universe.module';
import { starWarsUniverseModule } from './starWars-universe/starWars-universe.module';
import { AvatarComponent } from 'src/app/core/avatar/avatar.component';
import { HeaderLogoutComponent } from 'src/app/core/header-logout/header-logout.component';
import { MissionImposibleUniverseModule } from './missionImposible-universe/missionImposible-universe.module';





@NgModule({
  declarations: [

  ],
  imports: [
    LibraryRoutingModule,
    CommonModule,
    DuneUniverseModule,
    AlienUniverseModule,
    HungerGamesUniverseModule,
    ApesPlanetUniverseModule,
    CrepusculoUniverseModule,
    starWarsUniverseModule,
    MissionImposibleUniverseModule
  
    
  ],
  exports: [

  ]
})
export class LibraryModule {
  
 }
