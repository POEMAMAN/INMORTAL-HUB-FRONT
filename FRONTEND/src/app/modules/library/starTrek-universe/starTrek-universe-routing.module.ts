import { starTrekMarketsModule } from './starTrekMarkets/starTrekMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { StarTrekUniverseComponent } from './starTrek-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: StarTrekUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./starTrekBooks/starTrekBooks.module').then(m => m.starTrekBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./starTrekCharacters/starTrekCharacters.module').then(m => m.starTrekCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./starTrekMovies/starTrekMovies.module').then(m => m.starTrekMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./starTrekMarkets/starTrekMarkets.module').then(m => m.starTrekMarketsModule),
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
export class starTrekUniverseRoutingModule { };
