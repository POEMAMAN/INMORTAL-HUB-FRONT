import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { terminatorMoviesPageComponent } from './pages/terminatorMovies-page/terminatorMovies-page.component';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: terminatorMoviesPageComponent
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
export class terminatorMoviesRoutingModule { }
