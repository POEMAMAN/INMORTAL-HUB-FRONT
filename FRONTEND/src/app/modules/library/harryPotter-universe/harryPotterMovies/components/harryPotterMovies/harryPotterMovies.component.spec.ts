import { ComponentFixture, TestBed } from '@angular/core/testing';

import { harryPotterMoviesComponent } from './harryPotterMovies.component';

describe('harryPotterMoviesComponent', () => {
  let component: harryPotterMoviesComponent;
  let fixture: ComponentFixture<harryPotterMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [harryPotterMoviesComponent]
    });
    fixture = TestBed.createComponent(harryPotterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
