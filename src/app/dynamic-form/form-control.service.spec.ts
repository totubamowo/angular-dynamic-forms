import { FormControlService } from "./form-control.service";
import { Question } from "./question";
import { TextboxQuestion } from "./textbox-component/textbox-question";
import { FormGroup, FormControl } from "@angular/forms";

describe('FormControlService', () => {
  let questions: Question<any>[];

  it('#toFormGroup - should return FormGroup', () => {
    questions = [
      new TextboxQuestion({})
    ];
    expect(FormControlService.toFormGroup(questions)).toEqual(jasmine.any(FormGroup));
  });

  it('#toFormGroup - result contains form control', () => {
    questions = [
      new TextboxQuestion({ key: 'one' })
    ];
    const formGroup = FormControlService.toFormGroup(questions);
    expect(formGroup.controls['one']).toEqual(jasmine.any(FormControl));
  });
});