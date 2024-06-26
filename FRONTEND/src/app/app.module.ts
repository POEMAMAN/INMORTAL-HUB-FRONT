import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AssignTokenInterceptor } from './modules/auth/interceptors/assign-token.interceptor';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderLogoutComponent } from './core/header-logout/header-logout.component';
import { MainComponent } from './core/main/main.component';
import { LibraryComponent } from './modules/library/library.component';
import { AvatarComponent } from './core/avatar/avatar.component';
import { FavoritesComponent } from './core/favorites/favorites.component';







@NgModule({
  declarations: [
    HeaderLogoutComponent,
    AppComponent,
    FooterComponent,
    MainComponent,
    LibraryComponent,
    AvatarComponent,
    FavoritesComponent,





  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,

    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AssignTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
