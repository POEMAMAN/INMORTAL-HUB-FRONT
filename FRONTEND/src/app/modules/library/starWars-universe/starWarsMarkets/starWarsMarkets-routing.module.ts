import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { starWarsMarketsPageComponent } from './pages/starWarsMarkets-page/starswarsMarkets-page.component';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: starWarsMarketsPageComponent
      },
      {
        path: '**', redirectTo: '', pathMatch: 'full'
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class starWarsMarketsRoutingModule { }
