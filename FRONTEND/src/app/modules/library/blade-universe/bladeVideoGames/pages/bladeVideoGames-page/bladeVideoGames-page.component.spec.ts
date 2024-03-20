import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bladeVideoGamesPageComponent } from './bladeVideoGames-page.component';

describe('bladeVideoGamesPageComponent', () => {
  let component: bladeVideoGamesPageComponent;
  let fixture: ComponentFixture<bladeVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [bladeVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(bladeVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
