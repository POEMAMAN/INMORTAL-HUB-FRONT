import { ComponentFixture, TestBed } from '@angular/core/testing';

import { apesPlanetMoviesPageComponent } from './apesPlanetMovies-page.component';

describe('apesPlanetMoviesPageComponent', () => {
  let component: apesPlanetMoviesPageComponent;
  let fixture: ComponentFixture<apesPlanetMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [apesPlanetMoviesPageComponent]
    });
    fixture = TestBed.createComponent(apesPlanetMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
