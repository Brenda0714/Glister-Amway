import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorGlisterComponent } from './doctor-glister.component';

describe('DoctorGlisterComponent', () => {
  let component: DoctorGlisterComponent;
  let fixture: ComponentFixture<DoctorGlisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoctorGlisterComponent]
    });
    fixture = TestBed.createComponent(DoctorGlisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
