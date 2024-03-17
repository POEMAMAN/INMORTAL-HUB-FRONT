
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { DuneUniverseModule } from './dune-universe/dune-universe.module';
import { AlienUniverseModule } from './alien-universe/alien-universe.module';





@NgModule({
  declarations: [
  

  ],
  imports: [
    LibraryRoutingModule,
    CommonModule,
    DuneUniverseModule,
    AlienUniverseModule

  ],
  exports: [
 
  ]
})
export class LibraryModule {
  
 }
