
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crepusculoMovies',
  templateUrl: './crepusculoMovies.component.html',
  styleUrls: ['./crepusculoMovies.component.scss']
})
export class crepusculoMoviesComponent implements OnInit {
@Input() crepusculoMovie: any
isAdmin: boolean = false;

// Inyectamos el servicio DomSanitizer para poder usar el método bypassSecurityTrustResourceUrl
constructor(private sanitizer: DomSanitizer, private renderer: Renderer2, private elementRef: ElementRef,private authService: AuthService ){
}

ngOnInit(): void {

  // Sanitizamos la url del trailer para poder mostrarlo en el iframe
  this.crepusculoMovie.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.crepusculoMovie.trailer);
  
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
    const clickcardElement = this.elementRef.nativeElement.querySelector('.crepusculoMovies-container-deck-card');
    if (this.tarjetaVolteada) {
      this.renderer.removeClass(clickcardElement, 'flipped');
    } else {
      this.renderer.addClass(clickcardElement, 'flipped');
    }
    this.tarjetaVolteada = !this.tarjetaVolteada;
  }
}

