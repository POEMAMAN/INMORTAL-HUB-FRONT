import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starTrekUniverseRoutingModule } from './starTrek-universe-routing.module';
import { StarTrekUniverseComponent } from './starTrek-universe.component';
import { starTrekBooksModule } from './starTrekBooks/starTrekBooks.module';
import { starTrekCharactersModule } from './starTrekCharacters/starTrekCharacters.module';
import { starTrekMarketsModule } from './starTrekMarkets/starTrekMarkets.module';
import { starTrekMoviesModule } from './starTrekMovies/starTrekMovies.module';






@NgModule({
  declarations: [
    StarTrekUniverseComponent,

  ],
  imports: [
    CommonModule,
    starTrekUniverseRoutingModule,
    starTrekBooksModule,
    starTrekCharactersModule,
    starTrekMarketsModule,
    starTrekMoviesModule


  ]
})
export class starTrekUniverseModule { };
