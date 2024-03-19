import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { indianaJonesBooksRoutingModule } from './indianaJonesBooks-routing.module';
import { indianaJonesBooksPageComponent } from './pages/indianaJonesBooks-page/indianaJonesBooks-page.component';
import { indianaJonesBooksComponent } from './components/indianaJonesBooks/indianaJonesBooks.component';


@NgModule({
  declarations: [
    indianaJonesBooksPageComponent,
    indianaJonesBooksComponent
  ],
  imports: [
    CommonModule,
    indianaJonesBooksRoutingModule
  ]
})
export class indianaJonesBooksModule { }
