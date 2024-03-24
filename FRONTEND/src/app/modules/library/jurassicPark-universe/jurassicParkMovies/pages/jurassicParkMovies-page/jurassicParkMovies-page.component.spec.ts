import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jurassicParkMoviesPageComponent } from './jurassicParkMovies-page.component';

describe('jurassicParkMoviesPageComponent', () => {
  let component: jurassicParkMoviesPageComponent;
  let fixture: ComponentFixture<jurassicParkMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [jurassicParkMoviesPageComponent]
    });
    fixture = TestBed.createComponent(jurassicParkMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
