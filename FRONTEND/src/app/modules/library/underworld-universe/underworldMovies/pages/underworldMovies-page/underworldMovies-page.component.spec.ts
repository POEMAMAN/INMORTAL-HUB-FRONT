import { ComponentFixture, TestBed } from '@angular/core/testing';

import { underworldMoviesPageComponent } from './underworldMovies-page.component';

describe('underworldMoviesPageComponent', () => {
  let component: underworldMoviesPageComponent;
  let fixture: ComponentFixture<underworldMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [underworldMoviesPageComponent]
    });
    fixture = TestBed.createComponent(underworldMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
