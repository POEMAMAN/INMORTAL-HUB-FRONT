import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hungerGamesMarketsPageComponent } from './hungerGamesMarkets-page.component';

describe('hungerGamesMarketsPageComponent', () => {
  let component: hungerGamesMarketsPageComponent;
  let fixture: ComponentFixture<hungerGamesMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [hungerGamesMarketsPageComponent]
    });
    fixture = TestBed.createComponent(hungerGamesMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
