import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';

@Component({
  selector: 'dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css']
})

export class DynamicFormControlComponent {
  @Input() question: QuestionBase<any>;
  @Input() controlFormGroup: FormGroup;
}