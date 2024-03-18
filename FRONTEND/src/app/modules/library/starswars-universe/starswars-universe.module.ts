import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starswarsUniverseRoutingModule } from './starswars-universe-routing.module';
import { starswarsUniverseComponent } from './starswars-universe.component';
import { starswarsBooksModule } from './starswarsBooks/starswarsBooks.module';
import { starswarsCharactersModule } from './starswarsCharacters/starswarsCharacters.module';
import { starswarsMarketsModule } from './starswarsMarkets/starswarsMarkets.module';
import { starswarsMoviesModule } from './starswarsMovies/starswarsMovies.module';






@NgModule({
  declarations: [
    starswarsUniverseComponent,

  ],
  imports: [
    CommonModule,
    starswarsUniverseRoutingModule,
    starswarsBooksModule,
    starswarsCharactersModule,
    starswarsMarketsModule,
    starswarsMoviesModule


  ]
})
export class starswarsUniverseModule { };
