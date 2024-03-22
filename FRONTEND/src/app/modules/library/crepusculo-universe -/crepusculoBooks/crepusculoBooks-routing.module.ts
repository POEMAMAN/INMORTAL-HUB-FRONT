import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { crepusculoBooksPageComponent } from './pages/crepusculoBooks-page/crepusculoBooks-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: crepusculoBooksPageComponent
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
export class crepusculoBooksRoutingModule { }
