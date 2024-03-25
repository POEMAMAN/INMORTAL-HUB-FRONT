import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transformersMoviesComponent } from './transformersMovies.component';

describe('transformersMoviesComponent', () => {
  let component: transformersMoviesComponent;
  let fixture: ComponentFixture<transformersMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [transformersMoviesComponent]
    });
    fixture = TestBed.createComponent(transformersMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
