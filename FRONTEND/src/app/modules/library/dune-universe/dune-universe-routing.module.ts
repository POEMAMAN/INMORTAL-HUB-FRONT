import { duneMarketsModule } from './duneMarkets/duneMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { DuneUniverseComponent } from './dune-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: DuneUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./duneBooks/duneBooks.module').then(m => m.duneBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./duneCharacters/duneCharacters.module').then(m => m.duneCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./duneMovies/duneMovies.module').then(m => m.duneMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./duneMarkets/duneMarkets.module').then(m => m.duneMarketsModule),
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full',
  }
]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuneUniverseRoutingModule { };
