import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperModeComponent } from './developer-mode.component';

describe('DeveloperModeComponent', () => {
  let component: DeveloperModeComponent;
  let fixture: ComponentFixture<DeveloperModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperModeComponent]
    });
    fixture = TestBed.createComponent(DeveloperModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
