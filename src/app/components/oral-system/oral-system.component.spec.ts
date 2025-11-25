import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralSystemComponent } from './oral-system.component';

describe('OralSystemComponent', () => {
  let component: OralSystemComponent;
  let fixture: ComponentFixture<OralSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OralSystemComponent]
    });
    fixture = TestBed.createComponent(OralSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
