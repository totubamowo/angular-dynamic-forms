import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { InsuranceQuoteComponent } from './insurance-quote.component';

@Component({ selector: 'dynamic-form', template: '' })
class DynamicFormStubComponent {
  @Input() questions;
  @Input() actionName;
  @Output() submitted = new EventEmitter<any>();
}

@Component({ selector: 'mat-card', template: '' })
class MatCardStubComponent { }

describe('InsuranceQuoteComponent', () => {
  let component: InsuranceQuoteComponent;
  let element: any;
  let fixture: ComponentFixture<InsuranceQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MatCardStubComponent,
        DynamicFormStubComponent,
        InsuranceQuoteComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceQuoteComponent);
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