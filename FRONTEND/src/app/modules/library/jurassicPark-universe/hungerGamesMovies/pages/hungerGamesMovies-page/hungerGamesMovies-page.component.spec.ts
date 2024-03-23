import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hungerGamesMoviesPageComponent } from './hungerGamesMovies-page.component';

describe('hungerGamesMoviesPageComponent', () => {
  let component: hungerGamesMoviesPageComponent;
  let fixture: ComponentFixture<hungerGamesMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [hungerGamesMoviesPageComponent]
    });
    fixture = TestBed.createComponent(hungerGamesMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
