import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crepusculoMoviesComponent } from './crepusculoMovies.component';

describe('crepusculoMoviesComponent', () => {
  let component: crepusculoMoviesComponent;
  let fixture: ComponentFixture<crepusculoMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [crepusculoMoviesComponent]
    });
    fixture = TestBed.createComponent(crepusculoMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
