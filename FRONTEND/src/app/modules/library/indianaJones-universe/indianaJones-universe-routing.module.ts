import { indianaJonesMarketsModule } from './indianaJonesMarkets/indianaJonesMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { IndianaJonesUniverseComponent } from './indianaJones-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: IndianaJonesUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./indianaJonesBooks/indianaJonesBooks.module').then(m => m.indianaJonesBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./indianaJonesCharacters/indianaJonesCharacters.module').then(m => m.indianaJonesCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./indianaJonesMovies/indianaJonesMovies.module').then(m => m.indianaJonesMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./indianaJonesMarkets/indianaJonesMarkets.module').then(m => m.indianaJonesMarketsModule),
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
export class indianaJonesUniverseRoutingModule { };
