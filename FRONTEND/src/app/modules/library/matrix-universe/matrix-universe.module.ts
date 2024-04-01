import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixUniverseComponent } from './matrix-universe.component';
import { matrixCharactersModule } from './matrixCharacters/matrixCharacters.module';
import { matrixMarketsModule } from './matrixMarkets/matrixMarkets.module';
import { matrixMoviesModule } from './matrixMovies/matrixMovies.module';
import { matrixVideoGamesModule } from './matrixVideoGames/matrixVideoGames.module';
import { matrixUniverseRoutingModule } from './matrix-universe-routing.module';


@NgModule({
  declarations: [
    MatrixUniverseComponent,


  ],
  imports: [
    CommonModule,
    matrixUniverseRoutingModule,
    matrixCharactersModule,
    matrixMarketsModule,
    matrixMoviesModule,
    matrixVideoGamesModule
  

  ]
})
export class matrixUniverseModule { };
