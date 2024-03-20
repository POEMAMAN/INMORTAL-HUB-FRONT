
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from '../auth/guards/verify-token.guard';
import { LibraryComponent } from './library.component';
import { FavoritesComponent } from 'src/app/core/favorites/favorites.component';


const routes: Routes = [
  {
      path: '', children: [
    {
      path: '', canActivate: [verifyTokenGuard], component: LibraryComponent
    },
    {
      path: 'apesPlanetUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./apesPlanet-universe/apesPlanet-universe.module').then(m => m.ApesPlanetUniverseModule)
    },
    {
      path: 'alienUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./alien-universe/alien-universe.module').then(m => m.AlienUniverseModule)
    },
    {
      path: 'bladeUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./blade-universe/blade-universe.module').then(m => m.BladeUniverseModule)
    },
    {
      path: 'duneUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./dune-universe/dune-universe.module').then(m => m.DuneUniverseModule)
    },
    {
      path: 'harryPotterUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./harryPotter-universe/harryPotter-universe.module').then(m => m.HarryPotterUniverseModule)
    },
    {
      path: 'hungerGamesUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./hungerGames-universe/hungerGames-universe.module').then(m => m.HungerGamesUniverseModule)
    },
    {
      path: 'indianaJonesUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./indianaJones-universe/indianaJones-universe.module').then(m => m.indianaJonesUniverseModule)
    },
    {
      path: 'starWarsUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./starWars-universe/starWars-universe.module').then(m => m.starWarsUniverseModule)
    },
    {
      path: 'crepusculoUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./crepusculo-universe/crepusculo-universe.module').then(m => m.CrepusculoUniverseModule)
    },
    {
      path: 'missionImposibleUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./missionImposible-universe/missionImposible-universe.module').then(m => m.MissionImposibleUniverseModule)
    },
    { path: 'favorites', component: FavoritesComponent },
    {
      path: '**', redirectTo: 'library', pathMatch: 'full'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
