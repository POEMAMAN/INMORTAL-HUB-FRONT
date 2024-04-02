import { ComponentFixture, TestBed } from '@angular/core/testing';

import { backToTheFutureCharactersPageComponent } from './backToTheFutureCharacters-page.component';

describe('backToTheFutureCharactersPageComponent', () => {
  let component: backToTheFutureCharactersPageComponent;
  let fixture: ComponentFixture<backToTheFutureCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [backToTheFutureCharactersPageComponent]
    });
    fixture = TestBed.createComponent(backToTheFutureCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
