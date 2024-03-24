import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starTrekMoviesComponent } from './starTrekMovies.component';

describe('starTrekMoviesComponent', () => {
  let component: starTrekMoviesComponent;
  let fixture: ComponentFixture<starTrekMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starTrekMoviesComponent]
    });
    fixture = TestBed.createComponent(starTrekMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
