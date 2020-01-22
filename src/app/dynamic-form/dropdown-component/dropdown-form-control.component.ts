import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { DropdownQuestion } from './dropdown-question';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown-form-control.component.html'
})

export class DropdownFormControlComponent implements OnInit {
  @Input() question: DropdownQuestion;
  @Input() controlFormGroup: FormGroup;

  ngOnInit(): void {
    if (this.question.value !== null && typeof this.question.value !== 'undefined') {
      this.formControl.setValue(this.question.value);
      this.controlFormGroup.updateValueAndValidity();
    }
  }

  get formControl(): FormControl {
    return this.controlFormGroup.controls[this.question.key] as FormControl;
  }

  get isValid(): boolean {
    return this.formControl.valid;
  }
}