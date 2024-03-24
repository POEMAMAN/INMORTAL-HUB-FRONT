import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starTrekMoviesPageComponent } from './starTrekMovies-page.component';

describe('starTrekMoviesPageComponent', () => {
  let component: starTrekMoviesPageComponent;
  let fixture: ComponentFixture<starTrekMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starTrekMoviesPageComponent]
    });
    fixture = TestBed.createComponent(starTrekMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
