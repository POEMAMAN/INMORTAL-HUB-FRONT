import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jurassicParkUniverseRoutingModule } from './jurassicPark-universe-routing.module';
import { JurassicParkUniverseComponent } from './jurassicPark-universe.component';
import { jurassicParkBooksModule } from './jurassicParkBooks/jurassicParkBooks.module';
import { jurassicParkCharactersModule } from './jurassicParkCharacters/jurassicParkCharacters.module';
import { jurassicParkMarketsModule } from './jurassicParkMarkets/jurassicParkMarkets.module';
import { jurassicParkMoviesModule } from './jurassicParkMovies/jurassicParkMovies.module';






@NgModule({
  declarations: [
    JurassicParkUniverseComponent,

  ],
  imports: [
    CommonModule,
    jurassicParkUniverseRoutingModule,
    jurassicParkBooksModule,
    jurassicParkCharactersModule,
    jurassicParkMarketsModule,
    jurassicParkMoviesModule


  ]
})
export class jurassicParkUniverseModule { };
