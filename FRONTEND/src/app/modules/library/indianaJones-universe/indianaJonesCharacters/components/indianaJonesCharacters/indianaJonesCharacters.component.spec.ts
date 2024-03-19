import { ComponentFixture, TestBed } from '@angular/core/testing';

import { indianaJonesCharactersComponent } from './indianaJonesCharacters.component';

describe('indianaJonesCharactersComponent', () => {
  let component: indianaJonesCharactersComponent;
  let fixture: ComponentFixture<indianaJonesCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [indianaJonesCharactersComponent]
    });
    fixture = TestBed.createComponent(indianaJonesCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
