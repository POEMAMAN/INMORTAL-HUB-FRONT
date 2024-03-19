import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { indianaJonesUniverseRoutingModule } from './indianaJones-universe-routing.module';
import { IndianaJonesUniverseComponent } from './indianaJones-universe.component';
import { indianaJonesBooksModule } from './indianaJonesBooks/indianaJonesBooks.module';
import { indianaJonesCharactersModule } from './indianaJonesCharacters/indianaJonesCharacters.module';
import { indianaJonesMarketsModule } from './indianaJonesMarkets/indianaJonesMarkets.module';
import { indianaJonesMoviesModule } from './indianaJonesMovies/indianaJonesMovies.module';






@NgModule({
  declarations: [
    IndianaJonesUniverseComponent,

  ],
  imports: [
    CommonModule,
    indianaJonesUniverseRoutingModule,
    indianaJonesBooksModule,
    indianaJonesCharactersModule,
    indianaJonesMarketsModule,
    indianaJonesMoviesModule


  ]
})
export class indianaJonesUniverseModule { };
