import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starswarsCharactersPageComponent } from './starswarsCharacters-page.component';

describe('starswarsCharactersPageComponent', () => {
  let component: starswarsCharactersPageComponent;
  let fixture: ComponentFixture<starswarsCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starswarsCharactersPageComponent]
    });
    fixture = TestBed.createComponent(starswarsCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
