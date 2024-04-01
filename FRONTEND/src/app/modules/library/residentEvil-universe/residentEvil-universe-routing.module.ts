import { residentEvilMarketsModule } from './residentEvilMarkets/residentEvilMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { residentEvilUniverseComponent } from './residentEvil-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: residentEvilUniverseComponent,
  },
  {
    path: 'videoGames', canActivate: [verifyTokenGuard],loadChildren: () => import('./residentEvilVideoGames/residentEvilVideoGames.module').then(m => m.residentEvilVideoGamesModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./residentEvilCharacters/residentEvilCharacters.module').then(m => m.residentEvilCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./residentEvilMovies/residentEvilMovies.module').then(m => m.residentEvilMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./residentEvilMarkets/residentEvilMarkets.module').then(m => m.residentEvilMarketsModule),
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
export class residentEvilUniverseRoutingModule { };
