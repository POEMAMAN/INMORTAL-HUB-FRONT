import { ComponentFixture, TestBed } from '@angular/core/testing';

import { indianaJonesMoviesComponent } from './indianaJonesMovies.component';

describe('indianaJonesMoviesComponent', () => {
  let component: indianaJonesMoviesComponent;
  let fixture: ComponentFixture<indianaJonesMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [indianaJonesMoviesComponent]
    });
    fixture = TestBed.createComponent(indianaJonesMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
