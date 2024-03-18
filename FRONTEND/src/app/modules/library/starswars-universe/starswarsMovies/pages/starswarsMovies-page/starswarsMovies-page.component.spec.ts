import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starswarsMoviesPageComponent } from './starswarsMovies-page.component';

describe('starswarsMoviesPageComponent', () => {
  let component: starswarsMoviesPageComponent;
  let fixture: ComponentFixture<starswarsMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starswarsMoviesPageComponent]
    });
    fixture = TestBed.createComponent(starswarsMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
