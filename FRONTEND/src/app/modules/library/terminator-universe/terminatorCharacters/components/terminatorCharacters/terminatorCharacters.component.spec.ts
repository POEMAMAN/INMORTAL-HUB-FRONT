import { ComponentFixture, TestBed } from '@angular/core/testing';

import { terminatorCharactersComponent } from './terminatorCharacters.component';

describe('terminatorCharactersComponent', () => {
  let component: terminatorCharactersComponent;
  let fixture: ComponentFixture<terminatorCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [terminatorCharactersComponent]
    });
    fixture = TestBed.createComponent(terminatorCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
