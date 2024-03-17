import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneMoviesPageComponent } from './duneMovies-page.component';

describe('duneMoviesPageComponent', () => {
  let component: duneMoviesPageComponent;
  let fixture: ComponentFixture<duneMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneMoviesPageComponent]
    });
    fixture = TestBed.createComponent(duneMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
