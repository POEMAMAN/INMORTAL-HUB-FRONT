import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crepusculoMoviesPageComponent } from './crepusculoMovies-page.component';

describe('crepusculoMoviesPageComponent', () => {
  let component: crepusculoMoviesPageComponent;
  let fixture: ComponentFixture<crepusculoMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [crepusculoMoviesPageComponent]
    });
    fixture = TestBed.createComponent(crepusculoMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
