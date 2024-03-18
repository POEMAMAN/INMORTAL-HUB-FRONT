import { starswarsMarketsModule } from './starswarsMarkets/starswarsMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { starswarsUniverseComponent } from './starswars-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: starswarsUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./starswarsBooks/starswarsBooks.module').then(m => m.starswarsBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./starswarsCharacters/starswarsCharacters.module').then(m => m.starswarsCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./starswarsMovies/starswarsMovies.module').then(m => m.starswarsMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./starswarsMarkets/starswarsMarkets.module').then(m => m.starswarsMarketsModule),
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
export class starswarsUniverseRoutingModule { };
