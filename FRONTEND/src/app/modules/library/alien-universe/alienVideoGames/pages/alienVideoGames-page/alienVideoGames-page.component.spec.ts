import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alienVideoGamesPageComponent } from './alienVideoGames-page.component';

describe('alienVideoGamesPageComponent', () => {
  let component: alienVideoGamesPageComponent;
  let fixture: ComponentFixture<alienVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alienVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(alienVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
