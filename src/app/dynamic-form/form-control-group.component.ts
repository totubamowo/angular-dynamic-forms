import { FormGroup, FormArray } from '@angular/forms';
import { Component, Input } from '@angular/core';

import { FormControlService } from './form-control.service';
import { GroupQuestion } from './question-group';

@Component({
  selector: 'group',
  templateUrl: './form-control-group.component.html',
  styleUrls: ['./form-control-group.component.css'],
  providers: [FormControlService]
})

export class GroupFormControlComponent {
  @Input() question: GroupQuestion;
  @Input() controlFormGroup: FormGroup;

  constructor(private formControlService: FormControlService) { }

  get isValid(): boolean {
    return this.formArray.valid;
  }

  get formArray(): FormArray {
    return this.controlFormGroup.controls[this.question.key] as FormArray;
  }

  removeItem(index: string): void {
    this.formArray.removeAt(parseInt(index));
    this.formArray.updateValueAndValidity();
    this.controlFormGroup.updateValueAndValidity();
  }

  addItem(): void {
    this.formArray.push(this.formControlService.toFormGroup(this.question.questions));
    this.formArray.updateValueAndValidity();
    this.controlFormGroup.updateValueAndValidity();
  }
}