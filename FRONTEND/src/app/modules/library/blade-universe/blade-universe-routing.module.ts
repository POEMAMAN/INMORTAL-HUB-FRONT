import { bladeMarketsModule } from './bladeMarkets/bladeMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { BladeUniverseComponent } from './blade-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: BladeUniverseComponent,
  },
  {
    path: 'videoGames', canActivate: [verifyTokenGuard],loadChildren: () => import('./bladeVideoGames/bladeVideoGames.module').then(m => m.bladeVideoGamesModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./bladeCharacters/bladeCharacters.module').then(m => m.bladeCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./bladeMovies/bladeMovies.module').then(m => m.bladeMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./bladeMarkets/bladeMarkets.module').then(m => m.bladeMarketsModule),
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
export class BladeUniverseRoutingModule { };
