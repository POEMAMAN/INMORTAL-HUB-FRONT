import { ComponentFixture, TestBed } from '@angular/core/testing';

import { residentEvilMoviesPageComponent } from './residentEvilMovies-page.component';

describe('residentEvilMoviesPageComponent', () => {
  let component: residentEvilMoviesPageComponent;
  let fixture: ComponentFixture<residentEvilMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [residentEvilMoviesPageComponent]
    });
    fixture = TestBed.createComponent(residentEvilMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
