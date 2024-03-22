import { lordOfTheRingsMarketsModule } from './lordOfTheRingsMarkets/lordOfTheRingsMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { lordOfTheRingsUniverseComponent } from './lordOfTheRings-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: lordOfTheRingsUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./lordOfTheRingsBooks/lordOfTheRingsBooks.module').then(m => m.lordOfTheRingsBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./lordOfTheRingsCharacters/lordOfTheRingsCharacters.module').then(m => m.lordOfTheRingsCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./lordOfTheRingsMovies/lordOfTheRingsMovies.module').then(m => m.lordOfTheRingsMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./lordOfTheRingsMarkets/lordOfTheRingsMarkets.module').then(m => m.lordOfTheRingsMarketsModule),
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
export class lordOfTheRingsUniverseRoutingModule { };
