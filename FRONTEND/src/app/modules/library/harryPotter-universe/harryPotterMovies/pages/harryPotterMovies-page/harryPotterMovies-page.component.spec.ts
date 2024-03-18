import { ComponentFixture, TestBed } from '@angular/core/testing';

import { harryPotterMoviesPageComponent } from './harryPotterMovies-page.component';

describe('harryPotterMoviesPageComponent', () => {
  let component: harryPotterMoviesPageComponent;
  let fixture: ComponentFixture<harryPotterMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [harryPotterMoviesPageComponent]
    });
    fixture = TestBed.createComponent(harryPotterMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
