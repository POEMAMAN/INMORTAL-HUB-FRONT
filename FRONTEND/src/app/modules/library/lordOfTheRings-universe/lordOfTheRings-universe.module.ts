import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lordOfTheRingsUniverseRoutingModule } from './lordOfTheRings-universe-routing.module';
import { lordOfTheRingsUniverseComponent } from './lordOfTheRings-universe.component';
import { lordOfTheRingsBooksModule } from './lordOfTheRingsBooks/lordOfTheRingsBooks.module';
import { lordOfTheRingsCharactersModule } from './lordOfTheRingsCharacters/lordOfTheRingsCharacters.module';
import { lordOfTheRingsMarketsModule } from './lordOfTheRingsMarkets/lordOfTheRingsMarkets.module';
import { lordOfTheRingsMoviesModule } from './lordOfTheRingsMovies/lordOfTheRingsMovies.module';






@NgModule({
  declarations: [
    lordOfTheRingsUniverseComponent,

  ],
  imports: [
    CommonModule,
    lordOfTheRingsUniverseRoutingModule,
    lordOfTheRingsBooksModule,
    lordOfTheRingsCharactersModule,
    lordOfTheRingsMarketsModule,
    lordOfTheRingsMoviesModule


  ]
})
export class lordOfTheRingsUniverseModule { };
