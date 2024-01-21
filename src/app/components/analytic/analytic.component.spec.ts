import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticComponent } from './analytic.component';

describe('AnalyticComponent', () => {
  let component: AnalyticComponent;
  let fixture: ComponentFixture<AnalyticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
