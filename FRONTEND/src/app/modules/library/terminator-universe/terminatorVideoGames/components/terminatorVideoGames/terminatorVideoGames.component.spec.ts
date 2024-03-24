import { ComponentFixture, TestBed } from '@angular/core/testing';

import { terminatorVideoGamesComponent } from './terminatorVideoGames.component';

describe('terminatorVideoGamesComponent', () => {
  let component: terminatorVideoGamesComponent;
  let fixture: ComponentFixture<terminatorVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [terminatorVideoGamesComponent]
    });
    fixture = TestBed.createComponent(terminatorVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
