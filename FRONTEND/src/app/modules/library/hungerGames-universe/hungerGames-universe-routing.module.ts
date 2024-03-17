import { hungerGamesMarketsModule } from './hungerGamesMarkets/hungerGamesMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { HungerGamesUniverseComponent } from './hungerGames-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: HungerGamesUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./hungerGamesBooks/hungerGamesBooks.module').then(m => m.hungerGamesBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./hungerGamesCharacters/hungerGamesCharacters.module').then(m => m.hungerGamesCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./hungerGamesMovies/hungerGamesMovies.module').then(m => m.hungerGamesMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./hungerGamesMarkets/hungerGamesMarkets.module').then(m => m.hungerGamesMarketsModule),
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
export class HungerGamesUniverseRoutingModule { };
