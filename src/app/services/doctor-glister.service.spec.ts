import { TestBed } from '@angular/core/testing';

import { DoctorGlisterService } from './doctor-glister.service';

describe('DoctorGlisterService', () => {
  let service: DoctorGlisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorGlisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
