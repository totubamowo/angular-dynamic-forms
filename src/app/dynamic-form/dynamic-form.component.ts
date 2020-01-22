import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Question } from './question';
import { FormControlService } from './form-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FormControlService]
})

export class DynamicFormComponent implements OnInit {
  @Input() questions: Question<any>[] = [];
  @Input() actionName: string;
  @Output() submitted = new EventEmitter<any>();
  formGroup: FormGroup;

  constructor(private formControlService: FormControlService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formGroup = this.formControlService.toFormGroup(this.questions);
    this.cdr.detectChanges();
  }

  onSubmit(): void {
    this.submitted.emit(this.formGroup.value);
  }
}