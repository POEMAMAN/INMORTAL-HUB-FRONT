
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { DuneUniverseModule } from './dune-universe/dune-universe.module';



@NgModule({
  declarations: [
  

  ],
  imports: [
    LibraryRoutingModule,
    CommonModule,
    DuneUniverseModule
  ],
  exports: [

  ]
})
export class LibraryModule {
  
 }
