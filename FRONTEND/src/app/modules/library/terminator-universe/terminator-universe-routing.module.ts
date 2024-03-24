import { terminatorMarketsModule } from './terminatorMarkets/terminatorMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { TerminatorUniverseComponent } from './terminator-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: TerminatorUniverseComponent,
  },
  {
    path: 'videoGames', canActivate: [verifyTokenGuard],loadChildren: () => import('./terminatorVideoGames/terminatorGames.module').then(m => m.terminatorVideoGamesModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./terminatorCharacters/terminatorCharacters.module').then(m => m.terminatorCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./terminatorMovies/terminatorMovies.module').then(m => m.terminatorMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./terminatorMarkets/terminatorMarkets.module').then(m => m.terminatorMarketsModule),
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
export class terminatorUniverseRoutingModule { };
