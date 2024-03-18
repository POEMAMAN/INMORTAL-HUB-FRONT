import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starswarsBooksComponent } from './starswarsBooks.component';

describe('starswarsBooksComponent', () => {
  let component: starswarsBooksComponent;
  let fixture: ComponentFixture<starswarsBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starswarsBooksComponent]
    });
    fixture = TestBed.createComponent(starswarsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
