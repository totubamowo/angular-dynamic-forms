import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTwoComponent } from './example-two.component';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({ selector: 'dynamic-form', template: '' })
class DynamicFormStubComponent {
  @Input() questions;
  @Input() actionName;
  @Output() submitted = new EventEmitter<any>();
}

@Component({ selector: 'mat-card', template: '' })
class MatCardStubComponent { }

describe('ExampleTwoComponent', () => {
  let component: ExampleTwoComponent;
  let element: any;
  let fixture: ComponentFixture<ExampleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MatCardStubComponent,
        DynamicFormStubComponent,
        ExampleTwoComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTwoComponent);
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