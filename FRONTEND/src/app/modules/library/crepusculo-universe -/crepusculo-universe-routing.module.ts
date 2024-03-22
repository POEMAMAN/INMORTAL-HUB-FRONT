import { crepusculoMarketsModule } from './crepusculoMarkets/crepusculoMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { CrepusculoUniverseComponent } from './crepusculo-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: CrepusculoUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./crepusculoBooks/crepusculoBooks.module').then(m => m.crepusculoBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./crepusculoCharacters/crepusculoCharacters.module').then(m => m.crepusculoCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./crepusculoMovies/crepusculoMovies.module').then(m => m.crepusculoMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./crepusculoMarkets/crepusculoMarkets.module').then(m => m.crepusculoMarketsModule),
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
export class CrepusculoUniverseRoutingModule { };
