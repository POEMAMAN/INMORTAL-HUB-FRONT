import { ComponentFixture, TestBed } from '@angular/core/testing';

import { xmenVideoGamesComponent } from './xmenVideoGames.component';

describe('xmenVideoGamesComponent', () => {
  let component: xmenVideoGamesComponent;
  let fixture: ComponentFixture<xmenVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [xmenVideoGamesComponent]
    });
    fixture = TestBed.createComponent(xmenVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
