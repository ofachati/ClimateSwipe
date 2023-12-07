import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinderCardComponent } from './tinder-card.component';

describe('TinderCardComponent', () => {
  let component: TinderCardComponent;
  let fixture: ComponentFixture<TinderCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TinderCardComponent]
    });
    fixture = TestBed.createComponent(TinderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
