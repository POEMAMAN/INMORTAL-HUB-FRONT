import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jurassicParkCharactersPageComponent } from './jurassicParkCharacters-page.component';

describe('jurassicParkCharactersPageComponent', () => {
  let component: jurassicParkCharactersPageComponent;
  let fixture: ComponentFixture<jurassicParkCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [jurassicParkCharactersPageComponent]
    });
    fixture = TestBed.createComponent(jurassicParkCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
