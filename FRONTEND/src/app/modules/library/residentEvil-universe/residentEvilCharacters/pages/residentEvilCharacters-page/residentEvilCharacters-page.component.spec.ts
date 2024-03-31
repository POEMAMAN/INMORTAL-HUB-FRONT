import { ComponentFixture, TestBed } from '@angular/core/testing';

import { residentEvilCharactersPageComponent } from './residentEvilCharacters-page.component';

describe('residentEvilCharactersPageComponent', () => {
  let component: residentEvilCharactersPageComponent;
  let fixture: ComponentFixture<residentEvilCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [residentEvilCharactersPageComponent]
    });
    fixture = TestBed.createComponent(residentEvilCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
