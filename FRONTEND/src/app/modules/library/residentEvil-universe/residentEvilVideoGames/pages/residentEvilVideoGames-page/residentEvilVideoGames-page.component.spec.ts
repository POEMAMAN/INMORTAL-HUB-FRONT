import { ComponentFixture, TestBed } from '@angular/core/testing';

import { residentEvilVideoGamesPageComponent } from './residentEvilVideoGames-page.component';

describe('residentEvilVideoGamesPageComponent', () => {
  let component: residentEvilVideoGamesPageComponent;
  let fixture: ComponentFixture<residentEvilVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [residentEvilVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(residentEvilVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
