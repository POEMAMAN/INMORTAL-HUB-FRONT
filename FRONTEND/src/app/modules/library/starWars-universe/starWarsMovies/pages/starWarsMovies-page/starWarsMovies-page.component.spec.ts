import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starWarsMoviesPageComponent } from './starWarsMovies-page.component';

describe('starWarsMoviesPageComponent', () => {
  let component: starWarsMoviesPageComponent;
  let fixture: ComponentFixture<starWarsMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starWarsMoviesPageComponent]
    });
    fixture = TestBed.createComponent(starWarsMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
