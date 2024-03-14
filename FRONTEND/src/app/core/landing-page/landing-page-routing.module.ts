import { HarryPotterModule } from './harry-potter/harry-potter.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';







const routes: Routes = [
  {
      path: '', children: [
    {
      path: '', component: LandingPageComponent
    },
    {
      path: 'harry-potter', loadChildren: () => import('./harry-potter/harry-potter.component').then(m => m.HarryPotterComponent)
    },
    {
      path: '**', redirectTo: 'landing', pathMatch: 'full'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
