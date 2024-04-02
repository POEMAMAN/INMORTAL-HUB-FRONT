import { ComponentFixture, TestBed } from '@angular/core/testing';

import { backToTheFutureMoviesComponent } from './backToTheFutureMovies.component';

describe('backToTheFutureMoviesComponent', () => {
  let component: backToTheFutureMoviesComponent;
  let fixture: ComponentFixture<backToTheFutureMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [backToTheFutureMoviesComponent]
    });
    fixture = TestBed.createComponent(backToTheFutureMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
