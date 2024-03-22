import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bladeCharactersPageComponent } from './bladeCharacters-page.component';

describe('bladeCharactersPageComponent', () => {
  let component: bladeCharactersPageComponent;
  let fixture: ComponentFixture<bladeCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [bladeCharactersPageComponent]
    });
    fixture = TestBed.createComponent(bladeCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
