import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TextboxQuestion } from './question-textbox';

@Component({
  selector: 'textbox',
  templateUrl: './form-control-textbox.component.html'
})

export class TextboxFormControlComponent {
  @Input() question: TextboxQuestion;
  @Input() controlFormGroup: FormGroup;

  get formControl(): FormControl {
    return this.controlFormGroup.controls[this.question.key] as FormControl;
  }

  get isValid(): boolean {
    return this.formControl.valid;
  }
}