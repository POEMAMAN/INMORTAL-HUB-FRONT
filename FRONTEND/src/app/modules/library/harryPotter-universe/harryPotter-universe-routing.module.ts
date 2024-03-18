import { harryPotterMarketsModule } from './harryPotterMarkets/harryPotterMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { HarryPotterUniverseComponent } from './harryPotter-universe.component';


const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: HarryPotterUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('./harryPotterBooks/harryPotterBooks.module').then(m => m.harryPotterBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./harryPotterCharacters/harryPotterCharacters.module').then(m => m.harryPotterCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./harryPotterMovies/harryPotterMovies.module').then(m => m.harryPotterMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./harryPotterMarkets/harryPotterMarkets.module').then(m => m.harryPotterMarketsModule),
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
export class HarryPotterUniverseRoutingModule { };
