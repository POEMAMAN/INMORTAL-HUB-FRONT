import { ComponentFixture, TestBed } from '@angular/core/testing';

import { harryPotterBooksPageComponent } from './harryPotterBooks-page.component';

describe('harryPotterBooksPageComponent', () => {
  let component: harryPotterBooksPageComponent;
  let fixture: ComponentFixture<harryPotterBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [harryPotterBooksPageComponent]
    });
    fixture = TestBed.createComponent(harryPotterBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
