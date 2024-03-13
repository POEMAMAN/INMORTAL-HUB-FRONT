
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { CompleteUniverseModule } from './complete-universe/complete-universe.module';


@NgModule({
  declarations: [
  

  ],
  imports: [
    LibraryRoutingModule,
    CommonModule,
    CompleteUniverseModule,

  ],
  exports: [
    CompleteUniverseModule
  ]
})
export class LibraryModule {
  
 }
