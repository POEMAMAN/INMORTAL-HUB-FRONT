import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starswarsMoviesComponent } from './starswarsMovies.component';

describe('starswarsMoviesComponent', () => {
  let component: starswarsMoviesComponent;
  let fixture: ComponentFixture<starswarsMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starswarsMoviesComponent]
    });
    fixture = TestBed.createComponent(starswarsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
