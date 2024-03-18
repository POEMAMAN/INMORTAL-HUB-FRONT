import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alienMoviesPageComponent } from './alienMovies-page.component';

describe('alienMoviesPageComponent', () => {
  let component: alienMoviesPageComponent;
  let fixture: ComponentFixture<alienMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alienMoviesPageComponent]
    });
    fixture = TestBed.createComponent(alienMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
