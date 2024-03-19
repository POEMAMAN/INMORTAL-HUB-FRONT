import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starWarsMoviesComponent } from './starWarsMovies.component';

describe('sstarWarsMoviesComponent', () => {
  let component: starWarsMoviesComponent;
  let fixture: ComponentFixture<starWarsMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starWarsMoviesComponent]
    });
    fixture = TestBed.createComponent(starWarsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
