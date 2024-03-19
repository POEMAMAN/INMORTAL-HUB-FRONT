import { starWarsMarketsModule } from './starWarsMarkets/starWarsMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { starWarsUniverseComponent } from './starWars-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: starWarsUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./starWarsBooks/starWarsBooks.module').then(m => m.starWarsBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./starWarsCharacters/starWarsCharacters.module').then(m => m.starWarsCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./starWarsMovies/starWarsMovies.module').then(m => m.starWarsMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./starWarsMarkets/starWarsMarkets.module').then(m => m.starWarsMarketsModule),
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
export class starWarsUniverseRoutingModule { };
