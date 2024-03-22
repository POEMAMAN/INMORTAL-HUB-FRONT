import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starWarsMarketsPageComponent } from './starWarsMarkets-page.component';

describe('starWarsMarketsPageComponent', () => {
  let component: starWarsMarketsPageComponent;
  let fixture: ComponentFixture<starWarsMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starWarsMarketsPageComponent]
    });
    fixture = TestBed.createComponent(starWarsMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
