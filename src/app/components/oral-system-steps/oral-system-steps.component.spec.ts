import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralSystemStepsComponent } from './oral-system-steps.component';

describe('OralSystemStepsComponent', () => {
  let component: OralSystemStepsComponent;
  let fixture: ComponentFixture<OralSystemStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OralSystemStepsComponent]
    });
    fixture = TestBed.createComponent(OralSystemStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
