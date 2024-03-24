import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jurassicParkMoviesComponent } from './jurassicParkMovies.component';

describe('jurassicParkMoviesComponent', () => {
  let component: jurassicParkMoviesComponent;
  let fixture: ComponentFixture<jurassicParkMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [jurassicParkMoviesComponent]
    });
    fixture = TestBed.createComponent(jurassicParkMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
