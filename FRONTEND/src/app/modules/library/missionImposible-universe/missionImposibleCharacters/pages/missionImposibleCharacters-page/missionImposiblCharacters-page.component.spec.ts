import { ComponentFixture, TestBed } from '@angular/core/testing';

import { missionImposibleCharactersPageComponent } from './missionImposibleCharacters-page.component';

describe('missionImposibleCharactersPageComponent', () => {
  let component: missionImposibleCharactersPageComponent;
  let fixture: ComponentFixture<missionImposibleCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [missionImposibleCharactersPageComponent]
    });
    fixture = TestBed.createComponent(missionImposibleCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
