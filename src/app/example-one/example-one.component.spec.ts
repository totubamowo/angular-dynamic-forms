import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOneComponent } from './example-one.component';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({ selector: 'dynamic-form', template: '' })
class DynamicFormStubComponent {
  @Input() questions;
  @Input() actionName;
  @Output() submitted = new EventEmitter<any>();
}

@Component({ selector: 'mat-card', template: '' })
class MatCardStubComponent { }

describe('ExampleOneComponent', () => {
  let component: ExampleOneComponent;
  let element: any;
  let fixture: ComponentFixture<ExampleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MatCardStubComponent,
        DynamicFormStubComponent,
        ExampleOneComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOneComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeDefined();
  });

  it(`should have mat-card element`, () => {
    const card = element.querySelector('mat-card');
    expect(card).not.toBe(null);
  });
});