import { ComponentFixture, TestBed } from '@angular/core/testing';

import { indianaJonesMoviesPageComponent } from './indianaJonesMovies-page.component';

describe('indianaJonesMoviesPageComponent', () => {
  let component: indianaJonesMoviesPageComponent;
  let fixture: ComponentFixture<indianaJonesMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [indianaJonesMoviesPageComponent]
    });
    fixture = TestBed.createComponent(indianaJonesMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
