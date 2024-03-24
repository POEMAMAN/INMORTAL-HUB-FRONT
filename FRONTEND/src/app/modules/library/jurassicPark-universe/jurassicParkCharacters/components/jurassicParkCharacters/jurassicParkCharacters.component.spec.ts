import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jurassicParkCharactersComponent } from './jurassicParkCharacters.component';

describe('jurassicParkCharactersComponent', () => {
  let component: jurassicParkCharactersComponent;
  let fixture: ComponentFixture<jurassicParkCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [jurassicParkCharactersComponent]
    });
    fixture = TestBed.createComponent(jurassicParkCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
