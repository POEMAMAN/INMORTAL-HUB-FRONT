import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrepusculoUniverseRoutingModule } from './crepusculo-universe-routing.module';
import { CrepusculoUniverseComponent } from './crepusculo-universe.component';
import { crepusculoBooksModule } from './crepusculoBooks/crepusculoBooks.module';
import { crepusculoCharactersModule } from './crepusculoCharacters/crepusculoCharacters.module';
import { crepusculoMarketsModule } from './crepusculoMarkets/crepusculoMarkets.module';
import { crepusculoMoviesModule } from './crepusculoMovies/crepusculoMovies.module';






@NgModule({
  declarations: [
    CrepusculoUniverseComponent,

  ],
  imports: [
    CommonModule,
    CrepusculoUniverseRoutingModule,
    crepusculoBooksModule,
    crepusculoCharactersModule,
    crepusculoMarketsModule,
    crepusculoMoviesModule


  ]
})
export class CrepusculoUniverseModule { };
