import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bladeMoviesComponent } from './bladeMovies.component';

describe('bladeMoviesComponent', () => {
  let component: bladeMoviesComponent;
  let fixture: ComponentFixture<bladeMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [bladeMoviesComponent]
    });
    fixture = TestBed.createComponent(bladeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
