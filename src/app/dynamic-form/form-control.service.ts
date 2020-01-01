import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';

import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      let validators: ValidatorFn[] = [];
      if (question.required) {
        validators.push(Validators.required);
      }
      if (question.controlType == 'textbox') {
        if ((question as TextboxQuestion).type == 'number') {
          validators.push(Validators.pattern(/^[1-9][0-9]*$/));
        }
      }
      if (question.controlType == 'group') {
        group[question.key] = new FormArray(question.value || [], validators);
      }
      else {
        group[question.key] = new FormControl(question.value || '', validators);
      }
    });
    return new FormGroup(group);
  }
}