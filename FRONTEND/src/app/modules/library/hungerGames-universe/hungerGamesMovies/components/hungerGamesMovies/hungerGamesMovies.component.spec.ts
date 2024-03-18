import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hungerGamesMoviesComponent } from './hungerGamesMovies.component';

describe('hungerGamesMoviesComponent', () => {
  let component: hungerGamesMoviesComponent;
  let fixture: ComponentFixture<hungerGamesMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [hungerGamesMoviesComponent]
    });
    fixture = TestBed.createComponent(hungerGamesMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
