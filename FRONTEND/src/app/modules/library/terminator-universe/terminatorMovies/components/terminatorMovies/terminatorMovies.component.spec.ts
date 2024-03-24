import { ComponentFixture, TestBed } from '@angular/core/testing';

import { terminatorMoviesComponent } from './terminatorMovies.component';

describe('terminatorMoviesComponent', () => {
  let component: terminatorMoviesComponent;
  let fixture: ComponentFixture<terminatorMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [terminatorMoviesComponent]
    });
    fixture = TestBed.createComponent(terminatorMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
