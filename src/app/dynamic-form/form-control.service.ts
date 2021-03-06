import { FormControl, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';

import { Question } from './question';
import { TextboxQuestion } from './textbox/textbox-question';
import { GroupQuestion } from './group/group-question';
import { ListQuestion } from './list/list-question';

export class FormControlService {

  public static toFormGroup(questions: Question<any>[]): FormGroup {
    let group: any = {};

    questions.forEach(question => {
      let validators: ValidatorFn[] = [];
      if (question.required) {
        validators.push(Validators.required);
      }
      if (question.controlType == 'textbox') {
        const textboxQuestion = question as TextboxQuestion;
        if (textboxQuestion.type == 'number') {
          validators.push(Validators.pattern(/^[0-9][0-9]*$/));
          if(textboxQuestion.min !== null && textboxQuestion.min !== undefined) {
            validators.push(Validators.min(textboxQuestion.min));
          }
          if(textboxQuestion.max !== null && textboxQuestion.max !== undefined) {
            validators.push(Validators.max(textboxQuestion.max));
          }
        }
        else if (textboxQuestion.type == 'email') {
          validators.push(Validators.email);
        }
        else if (textboxQuestion.type == 'text') {
          if(textboxQuestion.minLength !== null && textboxQuestion.minLength !== undefined) {
            validators.push(Validators.minLength(textboxQuestion.minLength));
          }
          if(textboxQuestion.maxLength !== null && textboxQuestion.maxLength !== undefined) {
            validators.push(Validators.maxLength(textboxQuestion.maxLength));
          }
        }
      }
      if (question.controlType == 'list') {
        const listQuestion = question as ListQuestion;
        if(listQuestion.maxLength !== null && listQuestion.maxLength !== undefined) {
          validators.push(Validators.max(listQuestion.maxLength));
        }
      }

      if (question.controlType == 'group' || question.controlType == 'checkbox') {
        const groupQuestion = question as GroupQuestion;
        group[question.key] = this.toFormGroup(groupQuestion.questions);
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