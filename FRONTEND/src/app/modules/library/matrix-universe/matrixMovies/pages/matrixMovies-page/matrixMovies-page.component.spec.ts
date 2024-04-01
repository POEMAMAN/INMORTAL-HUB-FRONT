import { ComponentFixture, TestBed } from '@angular/core/testing';

import { matrixMoviesPageComponent } from './matrixMovies-page.component';

describe('matrixMoviesPageComponent', () => {
  let component: matrixMoviesPageComponent;
  let fixture: ComponentFixture<matrixMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [matrixMoviesPageComponent]
    });
    fixture = TestBed.createComponent(matrixMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
