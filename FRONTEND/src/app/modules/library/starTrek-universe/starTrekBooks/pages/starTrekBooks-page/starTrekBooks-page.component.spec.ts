import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starTrekBooksPageComponent } from './starTrekBooks-page.component';

describe('starTrekBooksPageComponent', () => {
  let component: starTrekBooksPageComponent;
  let fixture: ComponentFixture<starTrekBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starTrekBooksPageComponent]
    });
    fixture = TestBed.createComponent(starTrekBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
