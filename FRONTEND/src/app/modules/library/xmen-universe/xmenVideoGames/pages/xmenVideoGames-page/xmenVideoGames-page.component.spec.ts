import { ComponentFixture, TestBed } from '@angular/core/testing';

import { xmenVideoGamesPageComponent } from './xmenVideoGames-page.component';

describe('xmenVideoGamesPageComponent', () => {
  let component: xmenVideoGamesPageComponent;
  let fixture: ComponentFixture<xmenVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [xmenVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(xmenVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
