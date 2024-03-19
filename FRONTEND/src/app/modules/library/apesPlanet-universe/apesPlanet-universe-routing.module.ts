import { apesPlanetMarketsModule } from './apesPlanetMarkets/apesPlanetMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { ApesPlanetUniverseComponent } from './apesPlanet-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: ApesPlanetUniverseComponent,
  },
  {
    path: 'videoGames', canActivate: [verifyTokenGuard],loadChildren: () => import('./apesPlanetVideoGames/apesPlanetVideoGames.module').then(m => m.apesPlanetVideoGamesModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./apesPlanetCharacters/apesPlanetCharacters.module').then(m => m.apesPlanetCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./apesPlanetMovies/apesPlanetMovies.module').then(m => m.apesPlanetMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./apesPlanetMarkets/apesPlanetMarkets.module').then(m => m.apesPlanetMarketsModule),
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
export class apesPlanetUniverseRoutingModule { };
