import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneMoviesComponent } from './duneMovies.component';

describe('duneMoviesComponent', () => {
  let component: duneMoviesComponent;
  let fixture: ComponentFixture<duneMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneMoviesComponent]
    });
    fixture = TestBed.createComponent(duneMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
