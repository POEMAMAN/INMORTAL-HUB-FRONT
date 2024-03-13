
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteUniverseRoutingModule } from './complete-universe-routing.module';
import { DuneUniverseModule } from './dune-universe/dune-universe.module';

import { CompleteUniverseComponent } from './complete-universe.component';



@NgModule({
  declarations: [
    CompleteUniverseComponent
    
  ],
  imports: [
    CompleteUniverseRoutingModule,
    CommonModule,
    DuneUniverseModule,


  ],
})
export class CompleteUniverseModule { }
