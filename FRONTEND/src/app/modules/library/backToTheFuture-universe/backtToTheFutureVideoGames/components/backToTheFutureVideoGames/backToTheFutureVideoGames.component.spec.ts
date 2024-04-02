import { ComponentFixture, TestBed } from '@angular/core/testing';

import { backToTheFutureVideoGamesComponent } from './backToTheFutureVideoGames.component';

describe('backToTheFutureVideoGamesComponent', () => {
  let component: backToTheFutureVideoGamesComponent;
  let fixture: ComponentFixture<backToTheFutureVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [backToTheFutureVideoGamesComponent]
    });
    fixture = TestBed.createComponent(backToTheFutureVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
