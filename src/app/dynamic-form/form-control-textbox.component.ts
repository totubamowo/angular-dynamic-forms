import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TextboxQuestion } from './question-textbox';

@Component({
  selector: 'textbox',
  templateUrl: './form-control-textbox.component.html'
})

export class TextboxFormControlComponent implements OnInit {
  @Input() question: TextboxQuestion;
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