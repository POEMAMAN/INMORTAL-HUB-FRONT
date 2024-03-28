import { ComponentFixture, TestBed } from '@angular/core/testing';

import { xmenMoviesComponent } from './xmenMovies.component';

describe('xmenMoviesComponent', () => {
  let component: xmenMoviesComponent;
  let fixture: ComponentFixture<xmenMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [xmenMoviesComponent]
    });
    fixture = TestBed.createComponent(xmenMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
