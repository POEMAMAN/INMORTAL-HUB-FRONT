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
        this.removeActiveClass();
        card.nativeElement.classList.add("active");
      });
    });
  }

  removeActiveClass() {
    this.cards.forEach(card => {
      card.nativeElement.classList.remove("active");
    });
  }
}