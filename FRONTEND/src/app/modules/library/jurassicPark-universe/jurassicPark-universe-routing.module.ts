import { jurassicParkMarketsModule } from './jurassicParkMarkets/jurassicParkMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { JurassicParkUniverseComponent } from './jurassicPark-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: JurassicParkUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./jurassicParkBooks/jurassicParkBooks.module').then(m => m.jurassicParkBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./jurassicParkCharacters/jurassicParkCharacters.module').then(m => m.jurassicParkCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./jurassicParkMovies/jurassicParkMovies.module').then(m => m.jurassicParkMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./jurassicParkMarkets/jurassicParkMarkets.module').then(m => m.jurassicParkMarketsModule),
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
export class jurassicParkUniverseRoutingModule { };
