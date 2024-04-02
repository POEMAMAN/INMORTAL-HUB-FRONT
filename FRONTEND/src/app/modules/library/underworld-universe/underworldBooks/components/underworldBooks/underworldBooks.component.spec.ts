import { ComponentFixture, TestBed } from '@angular/core/testing';

import { underworldBooksComponent } from './underworldBooks.component';

describe('underworldBooksComponent', () => {
  let component: underworldBooksComponent;
  let fixture: ComponentFixture<underworldBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [underworldBooksComponent]
    });
    fixture = TestBed.createComponent(underworldBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
