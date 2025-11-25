import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralSystemIntroComponent } from './oral-system-intro.component';

describe('OralSystemIntroComponent', () => {
  let component: OralSystemIntroComponent;
  let fixture: ComponentFixture<OralSystemIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OralSystemIntroComponent]
    });
    fixture = TestBed.createComponent(OralSystemIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
