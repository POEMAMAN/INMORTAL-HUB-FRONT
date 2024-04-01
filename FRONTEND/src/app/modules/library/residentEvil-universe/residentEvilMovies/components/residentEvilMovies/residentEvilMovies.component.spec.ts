import { ComponentFixture, TestBed } from '@angular/core/testing';

import { residentEvilMoviesComponent } from './residentEvilMovies.component';

describe('residentEvilMoviesComponent', () => {
  let component: residentEvilMoviesComponent;
  let fixture: ComponentFixture<residentEvilMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [residentEvilMoviesComponent]
    });
    fixture = TestBed.createComponent(residentEvilMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
