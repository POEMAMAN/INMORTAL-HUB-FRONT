import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterUniverseComponent } from './harryPotter-universe.component';

describe('HarryPotterUniverseComponent', () => {
  let component: HarryPotterUniverseComponent;
  let fixture: ComponentFixture<HarryPotterUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarryPotterUniverseComponent]
    });
    fixture = TestBed.createComponent(HarryPotterUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
