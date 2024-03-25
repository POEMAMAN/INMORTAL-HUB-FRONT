import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transformersVideoGamesPageComponent } from './transformersVideoGames-page.component';

describe('transformersVideoGamesPageComponent', () => {
  let component: transformersVideoGamesPageComponent;
  let fixture: ComponentFixture<transformersVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [transformersVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(transformersVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
