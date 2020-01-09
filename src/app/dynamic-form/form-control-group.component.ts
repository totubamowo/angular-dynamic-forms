import { FormGroup, FormArray } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { FormControlService } from './form-control.service';
import { GroupQuestion } from './question-group';

@Component({
  selector: 'group',
  templateUrl: './form-control-group.component.html',
  styleUrls: ['./form-control-group.component.css'],
  providers: [FormControlService]
})

export class GroupFormControlComponent implements OnInit {
  @Input() question: GroupQuestion;
  @Input() controlFormGroup: FormGroup;

  ngOnInit(): void {
    if (this.question.value !== null && typeof this.question.value !== 'undefined') {
      this.question.value.forEach((currentValue, index) => {
        this.addItem();
        this.formArray.controls[index].setValue(currentValue);
        this.controlFormGroup.updateValueAndValidity();
      });
    }
  }

  constructor(private formControlService: FormControlService) { }

  get isValid(): boolean {
    return this.formArray.valid;
  }

  get formArray(): FormArray {
    return this.controlFormGroup.controls[this.question.key] as FormArray;
  }

  removeItem(index: string): void {
    this.formArray.removeAt(parseInt(index));
  }

  addItem(): void {
    this.formArray.push(this.formControlService.toFormGroup(this.question.questions));
  }
}