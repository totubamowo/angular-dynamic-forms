import { FormGroup, FormArray } from '@angular/forms';
import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, ComponentFactory, ViewContainerRef } from '@angular/core';

import { FormControlService } from './form-control.service';
import { GroupQuestion } from './question-group';
import { GroupChildComponent } from './group-child.component';
import { GroupChildContainerDirective } from './group-child-container.directive';

@Component({
  selector: 'group',
  templateUrl: './form-control-group.component.html',
  styleUrls: ['./form-control-group.component.css'],
  providers: [FormControlService]
})

export class GroupFormControlComponent implements OnInit {
  @Input() question: GroupQuestion;
  @Input() controlFormGroup: FormGroup;
  @ViewChild(GroupChildContainerDirective, { static: true, read: ViewContainerRef }) groupChildContainer: ViewContainerRef;

  private groupChildComponentFactory: ComponentFactory<GroupChildComponent>;

  ngOnInit(): void {
    if (this.question.value !== null && typeof this.question.value !== 'undefined') {
      this.question.value.forEach((currentValue: any) => {
        const controlIndex = this.addItem();
        this.formArray.at(controlIndex).setValue(currentValue);
        this.controlFormGroup.updateValueAndValidity();
      });
    }
  }

  constructor(private formControlService: FormControlService, componentFactoryResolver: ComponentFactoryResolver) {
    this.groupChildComponentFactory = componentFactoryResolver.resolveComponentFactory(GroupChildComponent);
  }

  get isValid(): boolean {
    return this.formArray.valid;
  }

  get formArray(): FormArray {
    return this.controlFormGroup.controls[this.question.key] as FormArray;
  }

  createGroupChild(controlIndex: number): void {
    const componentRef = this.groupChildContainer.createComponent(this.groupChildComponentFactory);
    componentRef.instance.controlFormGroup = this.formArray.controls[controlIndex] as FormGroup;
    componentRef.instance.questions = this.question.questions;
    componentRef.instance.removed.subscribe(() => {
      this.formArray.removeAt(controlIndex);
      this.groupChildContainer.remove(controlIndex);
    });
  }

  addItem(): number {
    this.formArray.push(this.formControlService.toFormGroup(this.question.questions));
    let controlIndex = this.formArray.length - 1;
    this.createGroupChild(controlIndex);
    return controlIndex;
  }
}