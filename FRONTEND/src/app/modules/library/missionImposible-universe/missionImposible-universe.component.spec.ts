import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionImposibleUniverseComponent } from './missionImposible-universe.component';

describe('MissionImposibleUniverseComponent', () => {
  let component: MissionImposibleUniverseComponent;
  let fixture: ComponentFixture<MissionImposibleUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionImposibleUniverseComponent]
    });
    fixture = TestBed.createComponent(MissionImposibleUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
