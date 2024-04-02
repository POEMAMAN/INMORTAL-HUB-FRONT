import { ComponentFixture, TestBed } from '@angular/core/testing';

import { underworldMoviesComponent } from './underworldMovies.component';

describe('underworldMoviesComponent', () => {
  let component: underworldMoviesComponent;
  let fixture: ComponentFixture<underworldMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [underworldMoviesComponent]
    });
    fixture = TestBed.createComponent(underworldMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
