import { ComponentFixture, TestBed } from '@angular/core/testing';

import { indianaJonesCharactersPageComponent } from './indianaJonesCharacters-page.component';

describe('indianaJonesCharactersPageComponent', () => {
  let component: indianaJonesCharactersPageComponent;
  let fixture: ComponentFixture<indianaJonesCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [indianaJonesCharactersPageComponent]
    });
    fixture = TestBed.createComponent(indianaJonesCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
