import { Component, OnInit, Input } from '@angular/core';
import { FormControlService } from '../form-control.service';
import { GroupQuestion } from './group-question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'group',
  templateUrl: './group-form-control.component.html',
  styleUrls: ['./group-form-control.component.css'],
  providers: [FormControlService]
})

export class GroupFormControlComponent implements OnInit {
  @Input() question: GroupQuestion;
  @Input() controlFormGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formControlService.toFormGroup(this.question.questions);
    if (this.question.value !== null && typeof this.question.value !== 'undefined') {
      this.formGroup.setValue(this.question.value);
      this.controlFormGroup.updateValueAndValidity();
    }
    this.formGroup.statusChanges.subscribe(() => {
      this.controlFormGroup.updateValueAndValidity();
    });
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
}