import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transformersMoviesPageComponent } from './transformersMovies-page.component';

describe('transformersMoviesPageComponent', () => {
  let component: transformersMoviesPageComponent;
  let fixture: ComponentFixture<transformersMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [transformersMoviesPageComponent]
    });
    fixture = TestBed.createComponent(transformersMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
