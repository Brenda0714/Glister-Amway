import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorGlisterTipsComponent } from './doctor-glister-tips.component';

describe('DoctorGlisterTipsComponent', () => {
  let component: DoctorGlisterTipsComponent;
  let fixture: ComponentFixture<DoctorGlisterTipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorGlisterTipsComponent]
    });
    fixture = TestBed.createComponent(DoctorGlisterTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
