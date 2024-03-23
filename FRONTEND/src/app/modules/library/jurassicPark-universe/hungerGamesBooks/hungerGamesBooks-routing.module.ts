import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hungerGamesBooksPageComponent } from './pages/hungerGamesBooks-page/hungerGamesBooks-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: hungerGamesBooksPageComponent
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
export class hungerGamesBooksRoutingModule { }
