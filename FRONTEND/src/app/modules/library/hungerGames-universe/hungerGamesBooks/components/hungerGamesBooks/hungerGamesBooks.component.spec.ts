import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hungerGamesBooksComponent } from './hungerGamesBooks.component';

describe('hungerGamesBooksComponent', () => {
  let component: hungerGamesBooksComponent;
  let fixture: ComponentFixture<hungerGamesBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [hungerGamesBooksComponent]
    });
    fixture = TestBed.createComponent(hungerGamesBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
