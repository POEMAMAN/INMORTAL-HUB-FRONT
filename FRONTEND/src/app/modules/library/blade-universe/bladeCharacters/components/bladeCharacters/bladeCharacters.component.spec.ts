import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bladeCharactersComponent } from './bladeCharacters.component';

describe('bladeCharactersComponent', () => {
  let component: bladeCharactersComponent;
  let fixture: ComponentFixture<bladeCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [bladeCharactersComponent]
    });
    fixture = TestBed.createComponent(bladeCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
