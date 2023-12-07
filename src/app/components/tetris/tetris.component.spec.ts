import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisComponent } from './tetris.component';

describe('TetrisComponent', () => {
  let component: TetrisComponent;
  let fixture: ComponentFixture<TetrisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TetrisComponent]
    });
    fixture = TestBed.createComponent(TetrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
