
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
      path: 'crepusculoUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../library/crepusculo-universe -/crepusculo-universe.module').then(m => m.CrepusculoUniverseModule)
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
      path: 'jurassicParkUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./jurassicPark-universe/jurassicPark-universe.module').then(m => m.jurassicParkUniverseModule)
    },
    {
      path: 'starWarsUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./starWars-universe/starWars-universe.module').then(m => m.starWarsUniverseModule)
    },
    {
      path: 'matrixUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./matrix-universe/matrix-universe.module').then(m => m.matrixUniverseModule)
    },
    {
      path: 'missionImposibleUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./missionImposible-universe/missionImposible-universe.module').then(m => m.MissionImposibleUniverseModule)
    },
    {
      path: 'lordOfTheRingsUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./lordOfTheRings-universe/lordOfTheRings-universe.module').then(m => m.lordOfTheRingsUniverseModule)
    },
    {
      path: 'starTrekUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./starTrek-universe/starTrek-universe.module').then(m => m.starTrekUniverseModule)
    },
    {
      path: 'terminatorUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./terminator-universe/terminator-universe.module').then(m => m.terminatorUniverseModule)
    },
    {
      path: 'transformersUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./transformers-universe/transformers-universe.module').then(m => m.transformersUniverseModule)
    },
    {
      path: 'xmenUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./xmen-universe/xmen-universe.module').then(m => m.xmenUniverseModule)
    },
    {
      path: 'residentEvilUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./residentEvil-universe/residentEvil-universe.module').then(m => m.residentEvilUniverseModule)
    },
    {
      path: 'underworldUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./underworld-universe/underworld-universe.module').then(m => m.underworldUniverseModule)
    },
    {
      path: 'backToTheFutureUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./backToTheFuture-universe/backToTheFuture-universe.module').then(m => m.backToTheFutureUniverseModule)
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
