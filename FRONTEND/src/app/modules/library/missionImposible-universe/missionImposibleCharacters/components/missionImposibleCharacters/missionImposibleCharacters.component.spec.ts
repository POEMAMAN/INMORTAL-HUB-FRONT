import { ComponentFixture, TestBed } from '@angular/core/testing';

import { missionImposibleCharactersComponent } from './missionImposibleCharacters.component';

describe('missionImposibleCharactersComponent', () => {
  let component: missionImposibleCharactersComponent;
  let fixture: ComponentFixture<missionImposibleCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [missionImposibleCharactersComponent]
    });
    fixture = TestBed.createComponent(missionImposibleCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
