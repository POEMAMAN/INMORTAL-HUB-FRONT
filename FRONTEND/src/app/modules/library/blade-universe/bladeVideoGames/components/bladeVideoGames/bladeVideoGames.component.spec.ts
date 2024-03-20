import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bladeVideoGamesComponent } from './bladeVideoGames.component';

describe('bladeVideoGamesComponent', () => {
  let component: bladeVideoGamesComponent;
  let fixture: ComponentFixture<bladeVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [bladeVideoGamesComponent]
    });
    fixture = TestBed.createComponent(bladeVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
