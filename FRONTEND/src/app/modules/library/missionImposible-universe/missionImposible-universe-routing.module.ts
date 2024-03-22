import { missionImposibleMarketsModule } from './missionImposibleMarkets/missionImposibleMarkets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { MissionImposibleUniverseComponent } from './missionImposible-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: MissionImposibleUniverseComponent,
  },
  {
    path: 'videoGames', canActivate: [verifyTokenGuard],loadChildren: () => import('./missionImposibleVideoGames/missionImposibleVideoGames.module').then(m => m.missionImposibleVideoGamesModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('./missionImposibleCharacters/missionImposibleCharacters.module').then(m => m.missionImposibleCharactersModule),
  },
  {
    path: 'movies', canActivate: [verifyTokenGuard],loadChildren: () => import('./missionImposibleMovies/missionImposibleMovies.module').then(m => m.missionImposibleMoviesModule),
  },
  {
    path: 'markets', canActivate: [verifyTokenGuard],loadChildren: () => import('./missionImposibleMarkets/missionImposibleMarkets.module').then(m => m.missionImposibleMarketsModule),
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
export class MissionImposibleUniverseRoutingModule { };
