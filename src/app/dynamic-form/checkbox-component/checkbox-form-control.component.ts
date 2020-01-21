import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CheckboxQuestion } from './checkbox-question';
import { FormControlService } from '../form-control.service';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox-form-control.component.html',
  styleUrls: ['./checkbox-form-control.component.css']
})

export class CheckboxFormControlComponent implements OnInit {
  @Input() question: CheckboxQuestion;
  @Input() controlFormGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formControlService.toFormGroup(this.question.questions);
    if (this.question.value !== null && typeof this.question.value !== 'undefined') {
      this.formGroup.setValue(this.question.value);
      this.controlFormGroup.updateValueAndValidity();
    }
  }

  constructor(private formControlService: FormControlService) { }

  get formGroup(): FormGroup {
    return this.controlFormGroup.controls[this.question.key] as FormGroup;
  }

  set formGroup(formGroup: FormGroup) {
    this.controlFormGroup.controls[this.question.key] = formGroup
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  get isValid(): boolean {
    return this.formGroup.valid;
  }

  updateValue(key, value: boolean): void {
    this.formGroup.get(key).setValue(value);
    this.controlFormGroup.updateValueAndValidity();
  }
}