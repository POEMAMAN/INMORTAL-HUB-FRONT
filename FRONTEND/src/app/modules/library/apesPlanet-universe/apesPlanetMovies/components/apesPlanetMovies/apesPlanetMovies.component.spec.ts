import { ComponentFixture, TestBed } from '@angular/core/testing';

import { apesPlanetMoviesComponent } from './apesPlanetMovies.component';

describe('apesPlanetMoviesComponent', () => {
  let component: apesPlanetMoviesComponent;
  let fixture: ComponentFixture<apesPlanetMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [apesPlanetMoviesComponent]
    });
    fixture = TestBed.createComponent(apesPlanetMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
