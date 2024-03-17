
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hungerGamesMovies',
  templateUrl: './hungerGamesMovies.component.html',
  styleUrls: ['./hungerGamesMovies.component.scss']
})
export class hungerGamesMoviesComponent implements OnInit {
@Input() hungerGamesMovie: any
isAdmin: boolean = false;
constructor(private authService: AuthService ){

}
ngOnInit(): void {
  this.authService.isAdmin().subscribe({
    next:(isAdmin: boolean) => {
      console.log(isAdmin)
      this.isAdmin = isAdmin;
    }, 
    error: (e) => {
      this.isAdmin = false;
    }
  })
}
}
  

