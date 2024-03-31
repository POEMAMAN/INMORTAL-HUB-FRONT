import { ComponentFixture, TestBed } from '@angular/core/testing';

import { residentEvilVideoGamesComponent } from './residentEvilVideoGames.component';

describe('residentEvilVideoGamesComponent', () => {
  let component: residentEvilVideoGamesComponent;
  let fixture: ComponentFixture<residentEvilVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [residentEvilVideoGamesComponent]
    });
    fixture = TestBed.createComponent(residentEvilVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
