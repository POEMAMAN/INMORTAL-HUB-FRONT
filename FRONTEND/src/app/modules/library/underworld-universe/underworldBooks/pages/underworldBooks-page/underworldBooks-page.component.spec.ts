import { ComponentFixture, TestBed } from '@angular/core/testing';

import { underworldBooksPageComponent } from './underworldBooks-page.component';

describe('underworldBooksPageComponent', () => {
  let component: underworldBooksPageComponent;
  let fixture: ComponentFixture<underworldBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [underworldBooksPageComponent]
    });
    fixture = TestBed.createComponent(underworldBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
