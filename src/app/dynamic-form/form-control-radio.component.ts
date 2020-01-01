import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { RadioQuestion } from './question-radio';

@Component({
  selector: 'radio',
  templateUrl: './form-control-radio.component.html',
  styleUrls: ['./form-control-radio.component.css']
})

export class RadioFormControlComponent {
  @Input() question: RadioQuestion;
  @Input() controlFormGroup: FormGroup;

  get formControl(): FormControl {
    return this.controlFormGroup.controls[this.question.key] as FormControl;
  }

  get isValid(): boolean {
    return this.formControl.valid;
  }
}