import { matrixMarketsModule } from './matrixMarkets/matrixMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { MatrixUniverseComponent } from './matrix-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: MatrixUniverseComponent,
  },
  {
    path: 'videoGames', canActivate: [verifyTokenGuard],loadChildren: () => import('./matrixVideoGames/matrixVideoGames.module').then(m => m.matrixVideoGamesModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./matrixCharacters/matrixCharacters.module').then(m => m.matrixCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./matrixMovies/matrixMovies.module').then(m => m.matrixMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./matrixMarkets/matrixMarkets.module').then(m => m.matrixMarketsModule),
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
export class matrixUniverseRoutingModule { };
