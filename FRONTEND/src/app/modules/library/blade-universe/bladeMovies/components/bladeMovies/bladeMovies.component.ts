import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit,Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bladeMovies',
  templateUrl: './bladeMovies.component.html',
  styleUrls: ['./bladeMovies.component.scss']
})
export class bladeMoviesComponent implements OnInit {
@Input() bladeMovie: any
isAdmin: boolean = false;
constructor(private renderer: Renderer2, private elementRef: ElementRef,private authService: AuthService ){

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
tarjetaVolteada: boolean = false;
clickCard() {
  const clickcardElement = this.elementRef.nativeElement.querySelector('.bladeMovies-container-deck-card');
  if (this.tarjetaVolteada) {
    this.renderer.removeClass(clickcardElement, 'flipped');
  } else {
    this.renderer.addClass(clickcardElement, 'flipped');
  }
  this.tarjetaVolteada = !this.tarjetaVolteada;
}
trailer: boolean = false;

showTrailer() {
  this.trailer = !this.trailer;
}
}
  

