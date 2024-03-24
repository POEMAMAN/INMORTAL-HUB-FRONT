import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starTrekBooksComponent } from './starTrekBooks.component';

describe('starTrekBooksComponent', () => {
  let component: starTrekBooksComponent;
  let fixture: ComponentFixture<starTrekBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starTrekBooksComponent]
    });
    fixture = TestBed.createComponent(starTrekBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
