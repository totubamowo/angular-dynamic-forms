import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';

import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { GroupQuestion } from './group-component/group-question';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]): FormGroup {
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
        group[question.key] = this.toFormGroup((question as GroupQuestion).questions);
      }
      else if (question.controlType == 'list') {
        group[question.key] = new FormArray([], validators);
      }
      else {
        group[question.key] = new FormControl('', validators);
      }
    });
    return new FormGroup(group);
  }
}