import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transformersVideoGamesComponent } from './transformersVideoGames.component';

describe('transformersVideoGamesComponent', () => {
  let component: transformersVideoGamesComponent;
  let fixture: ComponentFixture<transformersVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [transformersVideoGamesComponent]
    });
    fixture = TestBed.createComponent(transformersVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
