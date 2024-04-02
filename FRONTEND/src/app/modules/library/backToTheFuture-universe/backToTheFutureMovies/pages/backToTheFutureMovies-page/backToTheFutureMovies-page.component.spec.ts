import { ComponentFixture, TestBed } from '@angular/core/testing';

import { backToTheFutureMoviesPageComponent } from './backToTheFutureMovies-page.component';

describe('backToTheFutureMoviesPageComponent', () => {
  let component: backToTheFutureMoviesPageComponent;
  let fixture: ComponentFixture<backToTheFutureMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [backToTheFutureMoviesPageComponent]
    });
    fixture = TestBed.createComponent(backToTheFutureMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
