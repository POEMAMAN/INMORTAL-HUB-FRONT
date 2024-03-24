import { ComponentFixture, TestBed } from '@angular/core/testing';

import { terminatorMoviesPageComponent } from './terminatorMovies-page.component';

describe('terminatorMoviesPageComponent', () => {
  let component: terminatorMoviesPageComponent;
  let fixture: ComponentFixture<terminatorMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [terminatorMoviesPageComponent]
    });
    fixture = TestBed.createComponent(terminatorMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
