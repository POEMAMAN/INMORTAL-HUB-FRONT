import { ComponentFixture, TestBed } from '@angular/core/testing';

import { harryPotterBooksComponent } from './harryPotterBooks.component';

describe('harryPotterBooksComponent', () => {
  let component: harryPotterBooksComponent;
  let fixture: ComponentFixture<harryPotterBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [harryPotterBooksComponent]
    });
    fixture = TestBed.createComponent(harryPotterBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
