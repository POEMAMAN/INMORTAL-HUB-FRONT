import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { terminatorMarketsPageComponent } from './pages/terminatorMarkets-page/terminatorMarkets-page.component';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: terminatorMarketsPageComponent
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
export class terminatorMarketsRoutingModule { }
