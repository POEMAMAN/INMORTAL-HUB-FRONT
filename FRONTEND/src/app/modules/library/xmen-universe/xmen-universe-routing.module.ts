import { xmenMarketsModule } from './xmenMarkets/xmenMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { xmenUniverseComponent } from './xmen-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: xmenUniverseComponent,
  },
  {
    path: 'videoGames', canActivate: [verifyTokenGuard],loadChildren: () => import('./xmenVideoGames/xmenVideoGames.module').then(m => m.xmenVideoGamesModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./xmenCharacters/xmenCharacters.module').then(m => m.xmenCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./xmenMovies/xmenMovies.module').then(m => m.xmenMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./xmenMarkets/xmenMarkets.module').then(m => m.xmenMarketsModule),
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
export class xmenUniverseRoutingModule { };
