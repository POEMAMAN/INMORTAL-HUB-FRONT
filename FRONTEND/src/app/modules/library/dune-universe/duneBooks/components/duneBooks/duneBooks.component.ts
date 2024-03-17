
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component,Input, OnInit,Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-duneBooks',
  templateUrl: './duneBooks.component.html',
  styleUrls: ['./duneBooks.component.scss']
})
export class duneBooksComponent implements OnInit {
 
  @Input() duneBook: any
isAdmin: boolean = false;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private authService: AuthService) {

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
  
  flip() {
    const cardElement = this.elementRef.nativeElement.querySelector('.card');
    this.renderer.addClass(cardElement, 'flipped');
  }
  
  clickCard() {
    const clickcardElement = this.elementRef.nativeElement.querySelector('.clickcard');
    this.renderer.addClass(clickcardElement, 'flipped');
  }
  

}




