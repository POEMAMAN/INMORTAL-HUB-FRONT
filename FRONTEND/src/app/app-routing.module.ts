
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './modules/auth/guards/admin.guard';
import { verifyTokenGuard } from './modules/auth/guards/verify-token.guard';
import { MainComponent } from './core/main/main.component';
import { ChatComponent } from './core/chat/chat.component';



const routes: Routes = [

{
  path: 'main', component: MainComponent
},
{
  path: 'chat', component: ChatComponent
},
{
  path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
},
{
  path: 'library', canActivate: [verifyTokenGuard],loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule)
},
{
  path: '**', redirectTo: 'main', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
