import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starswarsCharactersComponent } from './starswarsCharacters.component';

describe('starswarsCharactersComponent', () => {
  let component: starswarsCharactersComponent;
  let fixture: ComponentFixture<starswarsCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starswarsCharactersComponent]
    });
    fixture = TestBed.createComponent(starswarsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
