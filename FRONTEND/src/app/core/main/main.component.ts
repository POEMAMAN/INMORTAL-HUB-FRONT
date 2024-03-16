import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.cards.forEach(card => {
      card.nativeElement.addEventListener("click", () => {
        card.nativeElement.classList.toggle("active");
      });
    });
  }
}