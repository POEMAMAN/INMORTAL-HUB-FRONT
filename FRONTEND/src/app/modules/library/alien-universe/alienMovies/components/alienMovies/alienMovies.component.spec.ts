import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alienMoviesComponent } from './alienMovies.component';

describe('alienMoviesComponent', () => {
  let component: alienMoviesComponent;
  let fixture: ComponentFixture<alienMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alienMoviesComponent]
    });
    fixture = TestBed.createComponent(alienMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
