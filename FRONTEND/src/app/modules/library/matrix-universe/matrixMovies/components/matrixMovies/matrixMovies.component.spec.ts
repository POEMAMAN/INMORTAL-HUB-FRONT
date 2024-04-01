import { ComponentFixture, TestBed } from '@angular/core/testing';

import { matrixMoviesComponent } from './matrixMovies.component';

describe('matrixMoviesComponent', () => {
  let component: matrixMoviesComponent;
  let fixture: ComponentFixture<matrixMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [matrixMoviesComponent]
    });
    fixture = TestBed.createComponent(matrixMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
