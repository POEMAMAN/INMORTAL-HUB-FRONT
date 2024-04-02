import { ComponentFixture, TestBed } from '@angular/core/testing';

import { backToTheFutureCharactersComponent } from './backToTheFutureCharacters.component';

describe('backToTheFutureCharactersComponent', () => {
  let component: backToTheFutureCharactersComponent;
  let fixture: ComponentFixture<backToTheFutureCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [backToTheFutureCharactersComponent]
    });
    fixture = TestBed.createComponent(backToTheFutureCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
