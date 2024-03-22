import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lordOfTheRingsMoviesPageComponent } from './lordOfTheRingsMovies-page.component';

describe('lordOfTheRingsMoviesPageComponent', () => {
  let component: lordOfTheRingsMoviesPageComponent;
  let fixture: ComponentFixture<lordOfTheRingsMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [lordOfTheRingsMoviesPageComponent]
    });
    fixture = TestBed.createComponent(lordOfTheRingsMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
