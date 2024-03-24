import { ComponentFixture, TestBed } from '@angular/core/testing';

import { terminatorVideoGamesPageComponent } from './terminatorVideoGames-page.component';

describe('terminatorVideoGamesPageComponent', () => {
  let component: terminatorVideoGamesPageComponent;
  let fixture: ComponentFixture<terminatorVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [terminatorVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(terminatorVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
