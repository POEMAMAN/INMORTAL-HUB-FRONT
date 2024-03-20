import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bladeMoviesPageComponent } from './bladeMovies-page.component';

describe('bladeMoviesPageComponent', () => {
  let component: bladeMoviesPageComponent;
  let fixture: ComponentFixture<bladeMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [bladeMoviesPageComponent]
    });
    fixture = TestBed.createComponent(bladeMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
