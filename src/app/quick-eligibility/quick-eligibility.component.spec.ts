import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickEligibilityComponent } from './quick-eligibility.component';

describe('QuickEligibilityComponent', () => {
  let component: QuickEligibilityComponent;
  let fixture: ComponentFixture<QuickEligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickEligibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
