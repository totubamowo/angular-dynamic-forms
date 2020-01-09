import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { RadioQuestion } from './question-radio';

@Component({
  selector: 'radio',
  templateUrl: './form-control-radio.component.html',
  styleUrls: ['./form-control-radio.component.css']
})

export class RadioFormControlComponent implements OnInit {
  @Input() question: RadioQuestion;
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