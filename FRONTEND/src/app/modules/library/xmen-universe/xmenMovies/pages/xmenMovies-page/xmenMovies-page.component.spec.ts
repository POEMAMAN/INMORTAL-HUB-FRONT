import { ComponentFixture, TestBed } from '@angular/core/testing';

import { xmenMoviesPageComponent } from './xmenMovies-page.component';

describe('xmenMoviesPageComponent', () => {
  let component: xmenMoviesPageComponent;
  let fixture: ComponentFixture<xmenMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [xmenMoviesPageComponent]
    });
    fixture = TestBed.createComponent(xmenMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
