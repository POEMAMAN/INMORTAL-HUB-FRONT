import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alienVideoGamesComponent } from './alienVideoGames.component';

describe('alienVideoGamesComponent', () => {
  let component: alienVideoGamesComponent;
  let fixture: ComponentFixture<alienVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alienVideoGamesComponent]
    });
    fixture = TestBed.createComponent(alienVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
