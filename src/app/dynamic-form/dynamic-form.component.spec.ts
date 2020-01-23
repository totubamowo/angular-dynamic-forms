import { ComponentFixture, async, TestBed } from "@angular/core/testing";

import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { DynamicFormComponent } from "./dynamic-form.component";

@Component({ selector: 'dynamic-form-control', template: '' })
class DynamicFormControlStubComponent {
  @Input() question;
}

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let element: any;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DynamicFormControlStubComponent,
        DynamicFormComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeDefined();
  });

  it(`should have form element`, () => {
    const form = element.querySelector('form');
    expect(form).not.toBe(null);
  });

});