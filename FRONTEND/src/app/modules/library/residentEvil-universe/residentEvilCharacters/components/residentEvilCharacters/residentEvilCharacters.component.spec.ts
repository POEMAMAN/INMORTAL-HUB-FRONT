import { ComponentFixture, TestBed } from '@angular/core/testing';

import { residentEvilCharactersComponent } from './residentEvilCharacters.component';

describe('residentEvilCharactersComponent', () => {
  let component: residentEvilCharactersComponent;
  let fixture: ComponentFixture<residentEvilCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [residentEvilCharactersComponent]
    });
    fixture = TestBed.createComponent(residentEvilCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
