import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { DropdownQuestion } from './question-dropdown';

@Component({
  selector: 'dropdown',
  templateUrl: './form-control-dropdown.component.html'
})

export class DropdownFormControlComponent {
  @Input() question: DropdownQuestion;
  @Input() controlFormGroup: FormGroup;

  get formControl(): FormControl {
    return this.controlFormGroup.controls[this.question.key] as FormControl;
  }

  get isValid(): boolean {
    return this.formControl.valid;
  }
}