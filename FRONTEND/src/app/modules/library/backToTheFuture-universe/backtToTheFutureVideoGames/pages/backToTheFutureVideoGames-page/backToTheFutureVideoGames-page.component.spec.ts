import { ComponentFixture, TestBed } from '@angular/core/testing';

import { backToTheFutureVideoGamesPageComponent } from './backToTheFutureVideoGames-page.component';

describe('backToTheFutureVideoGamesPageComponent', () => {
  let component: backToTheFutureVideoGamesPageComponent;
  let fixture: ComponentFixture<backToTheFutureVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [backToTheFutureVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(backToTheFutureVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
