import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { FormControlService } from './form-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FormControlService]

})

export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() actionName: string;
  @Output() submitted = new EventEmitter<any>();
  formGroup: FormGroup;

  constructor(private formControlService: FormControlService) { }

  ngOnInit() {
    this.formGroup = this.formControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.submitted.emit(this.formGroup.value);
  }
}
