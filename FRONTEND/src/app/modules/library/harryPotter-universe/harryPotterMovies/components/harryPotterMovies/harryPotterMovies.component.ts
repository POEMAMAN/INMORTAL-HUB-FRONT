
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-harryPotterMovies',
  templateUrl: './harryPotterMovies.component.html',
  styleUrls: ['./harryPotterMovies.component.scss']
})
export class harryPotterMoviesComponent implements OnInit {
@Input() harryPotterMovie: any
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
  

