import { ComponentFixture, TestBed } from '@angular/core/testing';

import { terminatorCharactersPageComponent } from './terminatorCharacters-page.component';

describe('terminatorCharactersPageComponent', () => {
  let component: terminatorCharactersPageComponent;
  let fixture: ComponentFixture<terminatorCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [terminatorCharactersPageComponent]
    });
    fixture = TestBed.createComponent(terminatorCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
