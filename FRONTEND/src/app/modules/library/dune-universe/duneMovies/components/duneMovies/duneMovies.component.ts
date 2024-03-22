
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-duneMovies',
  templateUrl: './duneMovies.component.html',
  styleUrls: ['./duneMovies.component.scss']
})
export class duneMoviesComponent implements OnInit {
@Input() duneMovie: any
isAdmin: boolean = false;

// Inyectamos el servicio DomSanitizer para poder usar el método bypassSecurityTrustResourceUrl
constructor(private sanitizer: DomSanitizer, private renderer: Renderer2, private elementRef: ElementRef,private authService: AuthService ){
}

ngOnInit(): void {

  // Sanitizamos la url del trailer para poder mostrarlo en el iframe
  this.duneMovie.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.duneMovie.trailer);
  
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
    const clickcardElement = this.elementRef.nativeElement.querySelector('.duneMovies-container-deck-card');
    if (this.tarjetaVolteada) {
      this.renderer.removeClass(clickcardElement, 'flipped');
    } else {
      this.renderer.addClass(clickcardElement, 'flipped');
    }
    this.tarjetaVolteada = !this.tarjetaVolteada;
  }
}

