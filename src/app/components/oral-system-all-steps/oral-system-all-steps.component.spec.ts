import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralSystemAllStepsComponent } from './oral-system-all-steps.component';

describe('OralSystemAllStepsComponent', () => {
  let component: OralSystemAllStepsComponent;
  let fixture: ComponentFixture<OralSystemAllStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OralSystemAllStepsComponent]
    });
    fixture = TestBed.createComponent(OralSystemAllStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
