
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { backToTheFutureUniverseComponent } from './backToTheFuture-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: backToTheFutureUniverseComponent,
  },
  {
    path: 'videoGames', canActivate: [verifyTokenGuard],loadChildren: () => import('./backtToTheFutureVideoGames/backToTheFutureVideoGames.module').then(m => m.backToTheFutureVideoGamesModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./backToTheFutureCharacters/backToTheFutureCharacters.module').then(m => m.backToTheFutureCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./backToTheFutureMovies/backToTheFutureMovies.module').then(m => m.backToTheFutureMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./backToTheFutureMarkets/backToTheFutureMarkets.module').then(m => m.backToTheFutureMarketsModule),
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
export class backToTheFutureUniverseRoutingModule { };
