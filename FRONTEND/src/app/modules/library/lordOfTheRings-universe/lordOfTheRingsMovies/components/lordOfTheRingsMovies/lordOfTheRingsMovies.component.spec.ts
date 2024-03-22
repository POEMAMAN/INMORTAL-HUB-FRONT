import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lordOfTheRingsMoviesComponent } from './lordOfTheRingsMovies.component';

describe('lordOfTheRingsMoviesComponent', () => {
  let component: lordOfTheRingsMoviesComponent;
  let fixture: ComponentFixture<lordOfTheRingsMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [lordOfTheRingsMoviesComponent]
    });
    fixture = TestBed.createComponent(lordOfTheRingsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
